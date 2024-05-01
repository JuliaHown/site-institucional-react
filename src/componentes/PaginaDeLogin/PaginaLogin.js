import styled from "styled-components";
import Email from "./componentes/InputEmail";
import Senha from "./componentes/inputSenha";
import Voltar from "./componentes/btnVoltarHome";
import FazerLogin from "./componentes/FazerLogin";
import CriarConta from "./componentes/TextoCadastro";
import ImagemPagina from "../PaginaDeLogin/componentes/Imagem";

function PaginaLogin() {
  return (
    <Main>
      <VoltarWrapper>
        <Voltar />
      </VoltarWrapper>
      
      <Section>
        <HeaderContainer>
          <HeaderTitle>Faça o seu login</HeaderTitle>
          <HeaderDescription>
            Digite o seu email e sua senha para fazer login na sua conta
          </HeaderDescription>
        </HeaderContainer>

        <FormContainer>
          <ContentWrapper>
            <EmailContainer>
              <Email />
              <Senha />
            </EmailContainer>
          </ContentWrapper>
        </FormContainer>

        <FazerLogin />

        <CriarContaWrapper>
          <CriarConta />
        </CriarContaWrapper>
      </Section>

      <ImagemWrapper>
        <ImagemPagina />
      </ImagemWrapper>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Section = styled.section`
  flex-direction: column;
  margin-left: 13vw;
  align-items: flex-start; /* alinha os componentes à esquerda */
`;

const VoltarWrapper = styled.div`
  position: absolute;
  top: calc(10vh - 24px);
  left: 6vw;
`;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const HeaderTitle = styled.h1`
  color: #183c18;
  letter-spacing: -0.72px;
  font: 700 32px/1.56 "DM Sans", sans-serif;
`;

const HeaderDescription = styled.p`
  color: #6d7283;
  letter-spacing: -0.32px;
  margin-top: 15px;
  font: 400 14px/1 "DM Sans", sans-serif;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  font-size: 14px;
  color: #477240;
  font-weight: 500;
  letter-spacing: -0.28px;
  line-height: 100%;
  margin-bottom: 6vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 6.7vw;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CriarContaWrapper = styled.div`
  margin-top: 5vh;
`;

const ImagemWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export default PaginaLogin;
