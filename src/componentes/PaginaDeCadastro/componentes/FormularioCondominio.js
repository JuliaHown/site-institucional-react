import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CampoInputCadastro, InputCadastro, Label } from "./styledComponents";
import { useNavigate } from "react-router-dom";

function PaginaCondominio() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleCepChange = (event) => {
    const formattedCep = event.target.value.replace(/\D/g, "");

    if (formattedCep.length === 8) {
      fetch(`https://viacep.com.br/ws/${formattedCep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data:", data);
          if (!data.erro) {
            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setError("");
          } else {
            setError("CEP não encontrado");
            setLogradouro("");
            setBairro("");
            setCidade("");
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar CEP:", error);
          setError("Erro ao buscar CEP");
          setLogradouro("");
          setBairro("");
          setCidade("");
          setUf("");
        });
    } else {
      setError("");
      setLogradouro("");
      setBairro("");
      setCidade("");
      setUf("");
    }

    setCep(formattedCep);
  };

  const isCepFilledAutomatically = cep.length === 8 && logradouro && bairro && cidade;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/condominios", {
        nome: event.target.nomeInput.value,
        cep,
        logradouro,
        bairro,
        cidade,
        uf
      });

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Erro ao cadastrar condomínio:", error);
    }
  };

  return (
    <Formulario>
      <form onSubmit={handleSubmit}>
        <CampoInputCadastro>
          <Label htmlFor="nomeInput">Nome do Condomínio</Label>
          <InputCadastro
            type="text"
            id="nomeInput"
            placeholder="Digite o nome do condomínio"
          />
        </CampoInputCadastro>

        <CampoInputCadastro>
          <Label htmlFor="cepInput">CEP</Label>
          <InputCadastro
            type="text"
            id="cepInput"
            placeholder="Digite o CEP"
            value={cep}
            onChange={handleCepChange}
            maxLength="9"
            cepPreenchido={isCepFilledAutomatically} 
          />
          <ErrorPopup show={error !== ""}>{error}</ErrorPopup>
        </CampoInputCadastro>

        {isCepFilledAutomatically && (
          <>
            <CampoInputCadastro>
              <Label>Logradouro</Label>
              <InputCadastro
                type="text"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
                placeholder="Logradouro"
              />
            </CampoInputCadastro>

            <CampoInputCadastro>
              <Label>Número</Label>
              <InputCadastro
                type="text"
                value={uf}
                readOnly
                placeholder="Número"
              />
            </CampoInputCadastro>

            <CampoInputCadastro>
              <Label>Bairro</Label>
              <InputCadastro
                type="text"
                value={bairro}
                readOnly
                placeholder="Bairro"
              />
            </CampoInputCadastro>

            <CampoInputCadastro>
              <Label>Cidade</Label>
              <InputCadastro
                type="text"
                value={cidade}
                readOnly
                placeholder="Cidade"
              />
            </CampoInputCadastro>

          </>
        )}

        <Botao type="submit">Cadastrar Condomínio</Botao>
      </form>
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
  background-color: #294b29;
  color: #fff;
  text-align: center;
  letter-spacing: -0.28px;
  padding: 16px 8px;
  font: 500 14px/100% "DM Sans", sans-serif;
  border: none;
  cursor: pointer;
  width: 29vw;

  transition: background-color 0.3s;

  &:hover {
    background-color: #123312;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export default PaginaCondominio;
