import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import axios from "axios";
import authService from "../../../../../api/services/authService"
import { validarNome, validarCelular, validarRG } from "./ValidacoesPorteiro";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TabelaAp() {
  const [dadosTabela, setDadosTabela] = useState([]);
  const [idLinhaEdicao, setIdLinhaEdicao] = useState(null);
  const [linhaVaziaId, setLinhaVaziaId] = useState(null);
  const [linhaEdicaoOriginal, setLinhaEdicaoOriginal] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ultimoId, setUltimoId] = useState(0);

  useEffect(() => {
    // LÓGICA DA REQUISIÇÃO AQUI
    // Esses dados são só para simular, pode usar o espaço para fazer a lógica da requisição
    const buscarDados = async () => {
        try {
        const user = authService.getCurrentUser();
        const token = user.token;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const response = await axios.get("http://172.206.254.101:8080/porteiros", config);
        setDadosTabela(response.data);
      } catch (error) {
        console.error("Erro ao buscar os porteiros:", error);
      }
    };

    buscarDados();
  }, []);

  //NOVA LINHA

  const adicionarNovaLinha = async () => {
    const novoId = ultimoId ? ultimoId + 1 : 1;
    const novaLinha = {
      id: novoId,
      nome: "",
      email: "",
      turno: "",
      rg: "",
      celular: "",
    };
    try {
      const user = authService.getCurrentUser();
      const token = user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      // Alterar a URL da requisição para incluir o ID do condomínio
      await axios.post(`http://172.206.254.101:8080/porteiros`, novaLinha, config);
      // Atualizar a lista de apartamentos após a adição bem-sucedida
      const response = await axios.get(`http://172.206.254.101:8080/porteiros`, config);
      setDadosTabela(response.data);
      setIdLinhaEdicao(null);
      setLinhaVaziaId(null);
      setUltimoId(novoId); // Atualiza o último ID
    } catch (error) {
      console.error("Erro ao adicionar porteiros:", error);
    }
  };

  // VALIDAÇÕES//

  const atualizarDadosLinha = (index, chave, valor) => {
    let novoValor = valor;

    if (chave === "nome") {
      if (!validarNome(valor)) {
        return; // Se não for válido, não atualiza o estado
      }
    } else if (chave === "rg") {
      if (!validarRG(valor)) {
        return; // Se não for válido, não atualiza o estado
      }
    } else if (chave === "celular") {
      // Adicionando a validação para celular
      if (!validarCelular(valor)) {
        return; // Se não for válido, não atualiza o estado
      }
    }

    const novosDados = [...dadosTabela];
    novosDados[index][chave] = novoValor;
    setDadosTabela(novosDados);
  };

  // SALVAR NOVA LINHA
  const salvarLinha = async (id) => {
    const indiceLinha = dadosTabela.findIndex((linha) => linha.id === id);
    const linha = dadosTabela[indiceLinha];
    // Verificar se todos os campos obrigatórios estão preenchidos, exceto o campo "Bloco"
    const camposObrigatoriosPreenchidos = Object.entries(linha).every(
      ([chave, valor]) => {
        // Verificar se a chave não é "bloco" e se o valor é vazio
        if (chave !== "bloco" && valor === "") {
          return false;
        }
        return true;
      }
    );
    // Se algum campo obrigatório estiver vazio (exceto "Bloco"), retorna sem salvar a linha
    if (!camposObrigatoriosPreenchidos) {
      return;
    }
    try {
      const user = authService.getCurrentUser();
      const token = user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      await axios.post(`http://172.206.254.101:8080/porteiros`, linha, config);
      const response = await axios.get(`http://172.206.254.101:8080/porteiros`, config);
      setDadosTabela(response.data);
      setIdLinhaEdicao(null);
      setLinhaVaziaId(null);
    } catch (error) {
      console.error("Erro ao cadastrar porteiros:", error);
    }
  };

  const excluirLinha = (id) => {
    setDadosTabela(dadosTabela.filter((linha) => linha.id !== id));
  };

  // CANCELAR A NOVA LINHA ADICIONADA

  const cancelarEdicao = (id) => {
    if (linhaVaziaId === id) {
      excluirLinha(id);
    } else {
      const novosDados = dadosTabela.map((linha) =>
        linha.id === id ? linhaEdicaoOriginal : linha
      );
      setDadosTabela(novosDados);
    }
    setIdLinhaEdicao(null);
    setLinhaVaziaId(null);
  };

  // EDITAR
  const iniciarEdicao = (id) => {
    const linha = dadosTabela.find((linha) => linha.id === id);
    setLinhaEdicaoOriginal({ ...linha });
    setIdLinhaEdicao(id);
  };

  const isSaveDisabled = (id) => {
    const indiceLinha = dadosTabela.findIndex((linha) => linha.id === id);
    const linha = dadosTabela[indiceLinha];
    // Verificar se algum campo obrigatório, exceto o campo "Bloco", está vazio
    const algumCampoObrigatorioVazio = Object.entries(linha).some(
      ([chave, valor]) => {
        // Verificar se a chave não é "bloco" e se o valor é vazio
        if (chave !== "bloco" && valor === "") {
          return true;
        }
        return false;
      }
    );
    // Se algum campo obrigatório estiver vazio (exceto "Bloco"), o botão Salvar estará desativado
    return algumCampoObrigatorioVazio;
  };

  // PAGINAÇÃO
  const linhasPorPagina = 6;
  const numeroTotalPaginas = Math.ceil(dadosTabela.length / linhasPorPagina);
  const indiceUltimaLinha = paginaAtual * linhasPorPagina;
  const indicePrimeiraLinha = indiceUltimaLinha - linhasPorPagina;
  const linhasPaginaAtual = dadosTabela.slice(
    indicePrimeiraLinha,
    indiceUltimaLinha
  );

  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const handleProximaPagina = () => {
    if (paginaAtual < numeroTotalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Porteiros</h2>
        <Button
          style={{ backgroundColor: "#006400", borderColor: "#006400" }}
          onClick={adicionarNovaLinha}
        >
          Adicionar Porteiro
        </Button>
      </div>
      <Table striped bordered hover>
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome do Porteiro</th>
            <th scope="col">Email</th>
            <th scope="col">Turno</th>
            <th scope="col">RG</th>
            <th scope="col">Telefone Celular</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {linhasPaginaAtual.map((linha, index) => (
            <tr key={linha.id}>
              <th scope="row">
                {idLinhaEdicao === linha.id ? (
                  <Form.Control
                    type="text"
                    value={linha.id}
                    onChange={(e) =>
                      atualizarDadosLinha(index, "id", e.target.value)
                    }
                  />
                ) : (
                  linha.id
                )}
              </th>
              <td>
                {idLinhaEdicao === linha.id ? (
                  <Form.Control
                    type="text"
                    value={linha.nome}
                    onChange={(e) =>
                      atualizarDadosLinha(index, "nome", e.target.value)
                    }
                  />
                ) : (
                  linha.nome
                )}
              </td>
              <td>
                {idLinhaEdicao === linha.id ? (
                  <Form.Control
                    type="email"
                    value={linha.email}
                    onChange={(e) =>
                      atualizarDadosLinha(index, "email", e.target.value)
                    }
                  />
                ) : (
                  linha.email
                )}
              </td>
              <td>
                {idLinhaEdicao === linha.id ? (
                  <Form.Select
                    value={linha.turno}
                    onChange={(e) =>
                      atualizarDadosLinha(index, "turno", e.target.value)
                    }
                  >
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                  </Form.Select>
                ) : (
                  linha.turno
                )}
              </td>

              <td>
                {idLinhaEdicao === linha.id ? (
                  <Form.Control
                    type="text"
                    value={linha.rg}
                    onChange={(e) =>
                      atualizarDadosLinha(index, "rg", e.target.value)
                    }
                  />
                ) : (
                  linha.rg
                )}
              </td>
              <td>
                {idLinhaEdicao === linha.id ? (
                  <Form.Control
                    type="text"
                    value={linha.celular}
                    onChange={(e) =>
                      atualizarDadosLinha(index, "celular", e.target.value)
                    }
                  />
                ) : (
                  linha.celular
                )}
              </td>
              <td>
                {idLinhaEdicao === linha.id ? (
                  <>
                    <Button
                      variant="success"
                      onClick={() => salvarLinha(linha.id)}
                      disabled={isSaveDisabled(linha.id)}
                    >
                      Salvar
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => cancelarEdicao(linha.id)}
                      className="ml-2"
                    >
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="warning"
                      onClick={() => iniciarEdicao(linha.id)}
                      className="mr-2"
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => excluirLinha(linha.id)}
                    >
                      <FaTrash />
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev onClick={handlePaginaAnterior} />
        {Array.from({ length: numeroTotalPaginas }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === paginaAtual}
            onClick={() => setPaginaAtual(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={handleProximaPagina} />
      </Pagination>
    </>
  );
}
