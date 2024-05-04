import React, { useState } from "react";
import { CampoInputCadastro, InputCadastro, Label } from "./styledComponents";
import styled from "styled-components";

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

function FormularioCadastro() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [error, setError] = useState("");

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
            setUf(data.uf);
            setError("");
          } else {
            setError("CEP não encontrado");
            setLogradouro("");
            setBairro("");
            setCidade("");
            setUf("");
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

  const isCepFilledAutomatically = cep.length === 8 && logradouro && bairro && cidade && uf;

  console.log("Error:", error);

  return (
    <Formulario>
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
              readOnly
              placeholder="Logradouro"
            />
          </CampoInputCadastro>

          <CampoInputCadastro>
            <Label>Complemento</Label>
            <InputCadastro
              type="text"
              id="complementoInput"
              placeholder="Ex: Bloco, Lado"
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

          <CampoInputCadastro>
            <Label>UF</Label>
            <InputCadastro
              type="text"
              value={uf}
              readOnly
              placeholder="UF"
            />
          </CampoInputCadastro>
        </>
      )}
    </Formulario>
  );
}

export default FormularioCadastro;
