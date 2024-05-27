import React, { useState } from "react";
import { CampoInputCadastro, InputCadastro, Label } from "./styledComponents";
import styled from "styled-components";
import axios from "axios";
import { validarEmail, formatarTelefone, validarSenha } from "./Validacoes";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function FormularioCadastro() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaValida, setSenhaValida] = useState(true);
  const [nome, setNome] = useState("");

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

  const handleChangeSenha = (event) => {
    const novaSenha = event.target.value;
    setSenha(novaSenha);
    setSenhaValida(validarSenha(novaSenha));
  };

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !telefone.trim() || !senha.trim()) {
      toast.error("Todos os campos são obrigatórios.");
      return;
    }

    if (!validarEmail(email)) {
      setEmailValido(false);
      toast.error("Email inválido.");
      return;
    }

    if (!validarSenha(senha)) {
      setSenhaValida(false);
      toast.error("Senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/clientes", {
        nome,
        email,
        telefone,
        senha,
      });

      if (response.status === 201) {
        toast.success("Cadastro concluído com sucesso!");
        setTimeout(() => {
          window.location.href = "/cadastrarcondominio";
        }, 3000); // Redireciona após 3 segundos
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao cadastrar usuário. Por favor, tente novamente.");
      }
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
            value={nome}
            onChange={handleChangeNome}
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
              onChange={handleChangeSenha}
            />
            <IconeOlho
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35bfc57b8777953e994bba70018953c83690144f7fa401fe5e368b66c2a0a905?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
              alt="Mostrar Senha"
              onClick={toggleMostrarSenha}
            />
          </div>
          {!senhaValida && (
            <span style={{ color: "red" }}>Senha deve ter no mínimo 6 caracteres</span>
          )}
        </CampoInputCadastro>

        <Botao type="submit">
          Cadastrar
        </Botao>
      </form>
      <ToastContainer />
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
