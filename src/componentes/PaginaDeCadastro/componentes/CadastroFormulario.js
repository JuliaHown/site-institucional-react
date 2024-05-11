import React, { useState } from "react";
import { CampoInputCadastro, InputCadastro, Label } from "./styledComponents";
import styled from "styled-components";
import axios from "axios";

import { validarEmail, formatarTelefone } from "./Validacoes";

function FormularioCadastro() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [cadastrado, setCadastrado] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha((prevState) => !prevState);
  };

  const handleChangeEmail = (event) => {
    const novoEmail = event.target.value;
    setEmail(novoEmail);
  };

  const handleBlurEmail = () => {
    setEmailValido(validarEmail(email));
  };


  const handleChangeTelefone = (event) => {
    const novoTelefone = event.target.value;
    if (novoTelefone.length <= 11) {
      setTelefone(formatarTelefone(novoTelefone));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/clientes", {
        email,
        telefone,
        senha,
      });

      if (response.status === 201) {
        setCadastrado(true);

        window.location.href = "/cadastrarcondominio";
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <Formulario>
      <form onSubmit={handleSubmit}>
        <CampoInputCadastro>
          <Label htmlFor="nomeInput">Nome</Label>
          <InputCadastro
            type="text"
            id="nomeInput"
            placeholder="Digite o seu nome completo"
          />
        </CampoInputCadastro>

        <CampoInputCadastro>
          <Label htmlFor="emailInput">Email</Label>
          <InputCadastro
            type="email"
            id="emailInput"
            placeholder="Digite o seu email"
            value={email}
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
          />
          {!emailValido && (
            <span style={{ color: "red" }}>Email inválido</span>
          )}
        </CampoInputCadastro>

        <CampoInputCadastro>
          <Label htmlFor="telefoneInput">Telefone Celular</Label>
          <InputCadastro
            type="tel"
            id="telefoneInput"
            placeholder="(00) 99999-9999"
            value={telefone}
            onChange={handleChangeTelefone}
          />
        </CampoInputCadastro>

        <CampoInputCadastro>
          <Label htmlFor="senhaInput">Senha</Label>
          <div style={{ position: "relative" }}>
            <InputCadastro
              type={mostrarSenha ? "text" : "password"}
              id="senhaInput"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <IconeOlho
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35bfc57b8777953e994bba70018953c83690144f7fa401fe5e368b66c2a0a905?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
              alt="Mostrar Senha"
              onClick={toggleMostrarSenha}
            />
          </div>
        </CampoInputCadastro>

        <Botao type="submit" disabled={cadastrado}>
          Cadastrar
        </Botao>
      </form>
      {cadastrado && <p>Usuário cadastrado com sucesso!</p>}
    </Formulario>
  );
}

const IconeOlho = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Formulario = styled.div`
  margin-left: 12vw;
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

export default FormularioCadastro;
