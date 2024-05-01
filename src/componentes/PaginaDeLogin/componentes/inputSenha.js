import styled from "styled-components";
import { useState } from "react";

function Senha() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputWrapper>
      <InputLabel>
        <LabelText>Senha</LabelText>
        <RequiredIndicator>*</RequiredIndicator>
      </InputLabel>
      <PasswordField>
        <PasswordInput
          type={showPassword ? "text" : "password"}
          placeholder="Digite a sua senha"
        />
        <EyeIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f93281bd2e155dc8346c0ad62b4de0485e1878ce0a3711af246595a6810b08e?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
          alt="Toggle password visibility"
          onClick={togglePasswordVisibility}
        />
      </PasswordField>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 26px;
  font-family: DM Sans, sans-serif;
`;

const InputLabel = styled.label`
  width: 100%;
`;

const RequiredIndicator = styled.span`
  color: rgba(71, 114, 64, 1);
`;

const LabelText = styled.span`
  color: rgba(107, 107, 107, 1);
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
`;

const PasswordInput = styled.input`
  flex: 1;
  width: 100%;
  max-width: 400px; /* largura máxima do campo de senha */
  border: none;
  font-family: DM Sans, sans-serif;

  @media (max-width: 768px) {
    max-width: 100%; /* ajuste para tela menor */
  }
`;

const EyeIcon = styled.img`
  width: 20px;
  aspect-ratio: 1;
  object-fit: contain;
  cursor: pointer;
`;

export default Senha;
