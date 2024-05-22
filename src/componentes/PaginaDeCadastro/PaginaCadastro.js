import React from "react";
import styled from "styled-components";

import Formulario from "./componentes/CadastroFormulario";
import VoltarHome from "../PaginaDeLogin/componentes/btnVoltarHome";
import ImagemCadastro from "./componentes/Imagem";
import TextoLogin from "./componentes/TextoLogin"


function PaginaCadastrar() {


  return (
    <Main>
      <Container>
        <BotaoVoltarHome>
          <VoltarHome />
        </BotaoVoltarHome>
        <Header>
          <Titulo>Crie sua conta</Titulo>
          <Subtitulo>
            Crie sua conta no Zé Porteiro e em seguida, cadastre os dados do{" "}
            <br /> seu condomínio
          </Subtitulo>
        </Header>
        <Formulario />
        <TextoLogin />
      </Container>
      <ImagemContainer>
        <ImagemCadastro />
      </ImagemContainer>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 50vw;
`;

const BotaoVoltarHome = styled.div`
  margin-right: 16vw;
  margin-bottom: 9vh;
  margin-top: -10vh;
`;

const Header = styled.div`
  text-align: left;
  margin-left: 9vw;
  margin-bottom: 6.5vh;
`;

const Titulo = styled.h1`
  color: #252525;
  letter-spacing: -0.72px;
  max-width: 239px;
  font: 700 32px/156% "DM Sans", sans-serif;
`;

const Subtitulo = styled.h2`
  color: var(--text-color, #6d7283);
  font: 400 14px/16px "DM Sans", sans-serif;
  letter-spacing: -0.32px;
`;

const ImagemContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
`;

export default PaginaCadastrar;
