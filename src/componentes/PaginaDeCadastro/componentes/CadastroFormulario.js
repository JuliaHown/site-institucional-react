import React from "react";
import { CampoInputCadastro, InputCadastro, Label } from "./styledComponents";
import styled from "styled-components";

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

function FormularioCadastro() {
  const [mostrarSenha, setMostrarSenha] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailValido, setEmailValido] = React.useState(true);
  const [telefone, setTelefone] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const toggleMostrarSenha = () => {
    setMostrarSenha((prevState) => !prevState);
  };

  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  const handleChangeEmail = (event) => {
    const novoEmail = event.target.value;
    setEmail(novoEmail);
  };

  const handleBlurEmail = () => {
    setEmailValido(validarEmail(email));
  };

  const formatarTelefone = (telefone) => {
    const apenasNumeros = telefone.replace(/[^\d]/g, "");
    let telefoneFormatado = apenasNumeros.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );
    return telefoneFormatado;
  };

  const handleChangeTelefone = (event) => {
    const novoTelefone = event.target.value;
    if (novoTelefone.length <= 11) {
      setTelefone(formatarTelefone(novoTelefone));
    }
  };

  return (
    <Formulario>
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
        {!emailValido && <span style={{ color: "red" }}>Email inválido</span>}
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
    </Formulario>
  );
}

export default FormularioCadastro;
