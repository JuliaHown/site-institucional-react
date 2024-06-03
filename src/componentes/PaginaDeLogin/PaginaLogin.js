import styled from "styled-components";
import Voltar from "./componentes/btnVoltarHome";
import CriarConta from "./componentes/TextoCadastro";
import ImagemPagina from "../PaginaDeLogin/componentes/Imagem";
import Formulario from "./componentes/FormularioLogin";

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

        <ContentWrapper>
          <Formulario />
        </ContentWrapper>

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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12.5vw;
`;

const VoltarWrapper = styled.div`
  position: absolute;
  top: 7vh;
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
  font: 700 30px/156% DM Sans, sans-serif;
`;

const HeaderDescription = styled.p`
  color: var(--text-color, #6d7283);
  letter-spacing: -0.32px;
  margin-top: 15px;
  font: 400 14px DM Sans, sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 4vh;
  margin-right: 8vw;
`;

const CriarContaWrapper = styled.div`
  margin-top: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagemWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export default PaginaLogin;
