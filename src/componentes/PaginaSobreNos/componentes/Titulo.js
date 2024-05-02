import * as React from "react";
import styled from "styled-components";

function Titulo() {
  return (
    <Section>
      <TituloPrincipal>Sobre nós</TituloPrincipal>
      <Descricao>
        <TextoDescricao>
          Revitalize a gestão das suas entregas: simplifique, agilize e <br/>
          descomplique com Zé Porteiro
        </TextoDescricao>
      </Descricao>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  margin-top: 45px;
  width: 536px;
  max-width: 100%;
  flex-direction: column;
  text-align: center;
  padding: 0 20px;
  align-items: center; /* Centraliza horizontalmente */

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const TituloPrincipal = styled.h1`
  background: linear-gradient(to left, #294b29, #50623a, #789461, #789461);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 378px;
  font: 800 48px/87.5% Montserrat, sans-serif;
  text-align: center;
`;

const Descricao = styled.div`
  color: #000;
  letter-spacing: -0.6px;
  margin-top: 16px;
  font: 500 14px/2.1 Mulish, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TextoDescricao = styled.span`
  font-family: Open Sans, sans-serif;
  font-weight: 400;
`;

export default Titulo;
