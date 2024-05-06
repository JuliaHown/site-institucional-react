import styled from "styled-components";
import { useState } from "react";

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (event) => {
    const novoEmail = event.target.value;
    setEmail(novoEmail);
    validarEmail(novoEmail);
  };

  const handleBlurEmail = () => {
    setTouchedEmail(true);
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validarEmail = (valor) => {
    const emailValido = valor.includes("@") && valor.includes(".com");
    setIsValidEmail(emailValido || valor === "");
  };

  const isInvalidEmail = !isValidEmail && touchedEmail;

  return (
    <FormWrapper>
      <EmailInputWrapper>
        <InputLabel>
          Email<RequiredIndicator>*</RequiredIndicator>
        </InputLabel>
        <EmailInputField
          type="email"
          placeholder="Digite o seu email"
          value={email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
          isValid={isValidEmail}
        />
        {isInvalidEmail && <MensagemErro>Email inválido</MensagemErro>}
      </EmailInputWrapper>

      <SenhaInputWrapper>
        <InputLabel>
          Senha<RequiredIndicator>*</RequiredIndicator>
        </InputLabel>
        <PasswordField>
          <PasswordInput
            type={showPassword ? "text" : "password"}
            placeholder="Digite a sua senha"
            value={senha}
            onChange={handleChangeSenha}
          />
          <EyeIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f93281bd2e155dc8346c0ad62b4de0485e1878ce0a3711af246595a6810b08e?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
            alt="Toggle password visibility"
            onClick={togglePasswordVisibility}
          />
        </PasswordField>
      </SenhaInputWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: DM Sans, sans-serif;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 26px;
`;

const EmailInputWrapper = styled(InputWrapper)``;

const SenhaInputWrapper = styled(InputWrapper)`
  margin-top: 15px;
`;

const InputLabel = styled.label`
  width: 100%;
`;

const RequiredIndicator = styled.span`
  color: rgba(71, 114, 64, 1);
`;

const EmailInputField = styled.input`
  width: 100%;
  margin-top: 15px;
  padding: 19px 24px;
  border-radius: 16px;
  border: 1px solid ${(props) => (props.isValid ? "rgba(224, 229, 242, 1)" : "red")};
  color: var(--text-color, #6d7283);
  font-weight: 400;
  font-family: DM Sans, sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PasswordField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  padding: 15px 21px;
  border-radius: 16px;
  border: 1px solid rgba(224, 229, 242, 1);
  color: var(--text-color, #6d7283);
  font-weight: 400;
  background-color: #fff; /* Adicionado */
`;

const PasswordInput = styled.input`
  flex: 1;
  width: 100%;
  max-width: 400px;
  border: none;
  font-family: DM Sans, sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const EyeIcon = styled.img`
  width: 20px;
  aspect-ratio: 1;
  object-fit: contain;
  cursor: pointer;
`;

const MensagemErro = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export default FormularioLogin;
