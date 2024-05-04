import * as React from "react";
import styled from "styled-components";

import Imagem from "../../../assets/ImagemCadastro.svg";

function SeçãoPrincipal() {
  return (
    <ContainerSeçãoPrincipal>
      <ImagemFundo src={Imagem} alt="Fundo" />
    </ContainerSeçãoPrincipal>
  );
}

const ContainerSeçãoPrincipal = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  max-width: 963px;
  justify-content: center;
  padding: 80px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ImagemFundo = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh; /* Ocupa toda a altura da tela */
  width: auto;
`;

export default SeçãoPrincipal;
