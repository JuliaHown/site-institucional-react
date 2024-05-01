import { useState } from "react";
import styled from "styled-components";

function EmailInput() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);

  const handleChange = (event) => {
    const novoEmail = event.target.value;
    setEmail(novoEmail);
    validarEmail(novoEmail);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const validarEmail = (valor) => {
    const emailValido = valor.includes("@") && valor.includes(".com");
    setIsValid(emailValido || valor === "");
  };

  const isInvalid = !isValid && touched;

  return (
    <InputWrapper>
      <InputLabel>
        Email<RequiredIndicator>*</RequiredIndicator>
      </InputLabel>
      <InputField
        type="email"
        placeholder="Digite o seu email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={isValid}
      />
      {isInvalid && <MensagemErro>Email inválido</MensagemErro>}
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

const InputField = styled.input`
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

const MensagemErro = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export default EmailInput;
