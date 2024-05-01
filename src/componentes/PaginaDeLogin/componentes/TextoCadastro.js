import styled from "styled-components";

function TextoParaCadastro() {
  return (
    <SecaoCriacaoConta>
      <TextoCriacaoConta>Ainda não possui uma conta?</TextoCriacaoConta>
      <LinkCriarConta href="/cadastrar">Crie uma agora</LinkCriarConta>
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
`;

const TextoCriacaoConta = styled.p`
  color: #2b3674;
  font-family: DM Sans, sans-serif;
  font-weight: 400;
  flex-grow: 1;
`;

const LinkCriarConta = styled.a`
  color: #477240;
  text-align: right;
  font-family: DM Sans, sans-serif;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none; /* Removido o sublinhado */
`;

export default TextoParaCadastro;
