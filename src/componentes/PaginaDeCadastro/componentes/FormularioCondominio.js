import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CampoInputCadastro, InputCadastro, Label } from "./styledComponents";
import { useNavigate } from "react-router-dom";
import { validarCEP, validarNumero, validarPreenchido } from "./Validacoes";

function PaginaCondominio() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleCepChange = (event) => {
    const formattedCep = event.target.value.replace(/\D/g, "");

    if (validarCEP(formattedCep)) {
      fetch(`https://viacep.com.br/ws/${formattedCep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data:", data);
          if (!data.erro) {
            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setIsFormVisible(true);
            setError("");
          } else {
            setError("CEP não encontrado");
            setLogradouro("");
            setBairro("");
            setCidade("");
            setIsFormVisible(false);
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar CEP:", error);
          setError("Erro ao buscar CEP");
          setLogradouro("");
          setBairro("");
          setCidade("");
          setIsFormVisible(false);
        });
    } else {
      setError("CEP inválido");
      setLogradouro("");
      setBairro("");
      setCidade("");
      setIsFormVisible(false);
    }

    setCep(formattedCep);
  };

  const handleNumeroChange = (event) => {
    const numeroInput = event.target.value;
    if (!validarNumero(numeroInput)) {
      setError("Apenas números são permitidos");
      setNumero("");
    } else {
      setError("");
      setNumero(numeroInput);
    }
  };

  const handleNomeChange = (event) => {
    const nomeInput = event.target.value;
    if (!/^[\w\s\u00C0-\u00FF]+$/.test(nomeInput)) {
      setError(
        "Apenas caracteres alfanuméricos e acentuações padrões são permitidos"
      );
      setNome("");
    } else {
      setError("");
      setNome(nomeInput);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !validarCEP(cep) ||
      !validarNumero(numero) ||
      !validarPreenchido(logradouro) ||
      !validarPreenchido(bairro) ||
      !validarPreenchido(cidade)
    ) {
      setError("Por favor, preencha todos os campos corretamente.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/condominios", {
        nome,
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
      });

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Erro ao cadastrar condomínio:", error);
    }
  };

  const isFormValid =
    validarCEP(cep) &&
    validarNumero(numero) &&
    validarPreenchido(logradouro) &&
    validarPreenchido(bairro) &&
    validarPreenchido(cidade);

  return (
    <Formulario onSubmit={handleSubmit}>
      <CampoInputCadastro>
        <Label htmlFor="nomeInput">Nome do Condomínio*</Label>
        <InputCadastro
          type="text"
          id="nomeInput"
          placeholder="Digite o nome do condomínio"
          value={nome}
          onChange={handleNomeChange}
          disabled={loading}
        />
      </CampoInputCadastro>

      <CampoInputCadastro>
        <Label htmlFor="cepInput">CEP*</Label>
        <InputCadastro
          type="text"
          id="cepInput"
          placeholder="Digite o CEP"
          value={cep}
          onChange={handleCepChange}
          maxLength="9"
          disabled={loading}
        />
        <ErrorPopup show={error !== ""}>{error}</ErrorPopup>
      </CampoInputCadastro>

      {isFormVisible && (
        <>
          <CampoInputCadastro>
            <Label htmlFor="logradouroInput">Logradouro</Label>
            <InputCadastro
              type="text"
              id="logradouroInput"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              placeholder="Logradouro"
              disabled={loading}
            />
          </CampoInputCadastro>

          <CampoInputCadastro>
            <Label htmlFor="numeroInput">Número*</Label>
            <InputCadastro
              type="text"
              id="numeroInput"
              value={numero}
              onChange={handleNumeroChange}
              placeholder="Número"
              disabled={loading}
            />
          </CampoInputCadastro>

          <CampoInputCadastro>
            <Label>Bairro</Label>
            <InputCadastro
              type="text"
              value={bairro}
              readOnly
              placeholder="Bairro"
              disabled={loading}
            />
          </CampoInputCadastro>

          <CampoInputCadastro>
            <Label>Cidade</Label>
            <InputCadastro
              type="text"
              value={cidade}
              readOnly
              placeholder="Cidade"
              disabled={loading}
            />
          </CampoInputCadastro>
        </>
      )}

      <Botao type="submit" disabled={!isFormValid || loading}>
        Cadastrar Condomínio
      </Botao>
    </Formulario>
  );
}

const Formulario = styled.div`
  margin-left: 12vw;
`;

const ErrorPopup = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: #ff4d4f;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const Botao = styled.button`
  border-radius: 16px;
  background-color: ${({ disabled }) => (disabled ? "#708470" : "#123312")};
  color: #fff;
  text-align: center;
  letter-spacing: -0.28px;
  padding: 16px 8px;
  font: 500 14px/100% "DM Sans", sans-serif;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: 29vw;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#708470" : "#123312")};
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export default PaginaCondominio;
