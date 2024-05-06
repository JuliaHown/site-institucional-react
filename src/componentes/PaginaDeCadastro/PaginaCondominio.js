import React from "react";
import styled from "styled-components";

import Formulario from "./componentes/FormularioCondominio";
import VoltarHome from "../PaginaDeLogin/componentes/btnVoltarHome";
import ImagemCadastro from "./componentes/Imagem";

function PaginaCadastrar() {
  return (
    <Main>
      <Container>
        <BotaoVoltarHome>
          <VoltarHome />
        </BotaoVoltarHome>
        <Header>
          <Titulo>Cadastrar condomínio</Titulo>
          <Subtitulo>
            Preencha os campos com os dados do seu condomínio para preparar <br/> o
            seu ambiente.
          </Subtitulo>
        </Header>
        <Formulario />
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
  margin-top: -12vh;
`;

const Header = styled.div`
  text-align: left;
  margin-left: 10.5vw;
  margin-bottom: 2vh;
`;

const Titulo = styled.h1`
  color: #252525;
  letter-spacing: -0.72px;
  max-width: 239px;
  font: 700 32px/1.2 "DM Sans", sans-serif;
  white-space: nowrap;
  margin-bottom: 1.5vh;
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
