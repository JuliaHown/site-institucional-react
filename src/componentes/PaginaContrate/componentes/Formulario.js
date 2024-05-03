import * as React from "react";
import styled from "styled-components";

function FormParaContato() {
  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailValido, setEmailValido] = React.useState(true);
  const [telefoneValido, setTelefoneValido] = React.useState(true);

  const formatarTelefone = (telefone) => {
    const apenasNumeros = telefone.replace(/[^\d]/g, "");
    const telefoneFormatado = apenasNumeros.replace(/^(\d{5})(\d{0,4})/, "$1-$2");
    return telefoneFormatado;
  };

  const handleChangeTelefone = (event) => {
    const novoTelefone = event.target.value;
    setTelefone(formatarTelefone(novoTelefone));
    validarTelefone(novoTelefone);
  };

  const handleChangeEmail = (event) => {
    const novoEmail = event.target.value;
    setEmail(novoEmail);
    validarEmail(novoEmail);
  };

  const validarEmail = (email) => {
    const regexEmail = /\S+@\S+\.\S+/;
    setEmailValido(regexEmail.test(email));
  };

  const validarTelefone = (telefone) => {
    const apenasNumeros = telefone.replace(/[^\d]/g, "");
    setTelefoneValido(apenasNumeros.length === 9);
  };

  return (
    <FormularioContato>
      <CamposFormulario>
        <CampoFormulario>
          <Rotulo>Nome do Responsável</Rotulo>
          <Entrada type="text" placeholder="Digite o seu nome completo" />
        </CampoFormulario>
        <CampoFormulario>
          <Rotulo>E-mail para contato</Rotulo>
          <Entrada
            type="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={handleChangeEmail}
          />
          {!emailValido && <MensagemErro>Email inválido</MensagemErro>}
        </CampoFormulario>
        <CamposTelefone>
          <CampoTelefone>
            <Rotulo>DDD</Rotulo>
            <Entrada
              type="tel"
              placeholder="DDD"
            />
          </CampoTelefone>
          <CampoTelefone>
            <Rotulo>Telefone</Rotulo>
            <Entrada
              type="tel"
              placeholder="Número do telefone"
              value={telefone}
              onChange={handleChangeTelefone}
            />
            {!telefoneValido && <MensagemErro>O telefone celular deve ter 9 dígitos</MensagemErro>}
          </CampoTelefone>
        </CamposTelefone>
      </CamposFormulario>
      <BotaoSubmit>Contrate agora</BotaoSubmit>
    </FormularioContato>
  );
}

const FormularioContato = styled.form`
  border-radius: 30px;
  background-color: #789461;
  display: flex;
  flex-direction: column;
  padding: 56px;
  max-width: 600px;
  margin: 0 auto; 
  margin-right: 6vw;
`;

const CamposFormulario = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 123%;
`;

const CampoFormulario = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Rotulo = styled.label`
  color: #fff;
  font: 500 16px "Open Sans", sans-serif;
`;

const Entrada = styled.input`
  border-radius: 10px;
  border: 1px solid #b4b4b4;
  background-color: #fff;
  margin-top: 10px;
  color: #909090;
  padding: 12px 15px; 
  font: 400 14px "Open Sans", sans-serif;
`;

const CamposTelefone = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const CampoTelefone = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 0;
`;

const MensagemErro = styled.span`
  color: #690000;
  font-size: 12px;
  margin-top: 5px;
`;

const BotaoSubmit = styled.button`
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #294b29;
  background-color: #477240;
  align-self: center;
  margin-top: 24px; 
  color: #fff;
  text-align: center;
  padding: 12px 25px; 
  font: 800 18px/24px "Mulish", sans-serif;
  cursor: pointer;
`;

export default FormParaContato;
