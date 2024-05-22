import styled from "styled-components";

function TextoParaLogin() {
  return (
    <SecaoCriacaoConta>
      <TextoCriacaoConta>Já possui uma conta?</TextoCriacaoConta>
      <LinkFazerLogin href="/login">Faça o Login</LinkFazerLogin>
    </SecaoCriacaoConta>
  );
}

const SecaoCriacaoConta = styled.section`
  display: flex;
  gap: 8px;
  font-size: 14px;
  letter-spacing: -0.28px;
  line-height: 143%;
  padding: 0 20px;
  margin-top: 5vh;
  margin-left: 12vw;
`;

const TextoCriacaoConta = styled.p`
  color: #2b3674;
  font-family: DM Sans, sans-serif;
  font-weight: 400;
  flex-grow: 1;
`;

const LinkFazerLogin = styled.a`
  color: #477240;
  text-align: right;
  font-family: DM Sans, sans-serif;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`;

export default TextoParaLogin;
