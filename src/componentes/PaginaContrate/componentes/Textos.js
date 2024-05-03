import * as React from "react";
import styled from "styled-components";

function TextosContato() {
  return (
    <Container>
      <Titulo>Transforme o modo de organização das suas entregas</Titulo>
      <Descricao>
        Preencha os campos do formulário ao lado sobre a sua empresa e um dos <br/>
        nossos agentes entrará em contato com você;
      </Descricao>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  max-width: 720px;
  flex-direction: column;
  margin-left: 10vw;
`;

const Titulo = styled.h1`
  background: var(
    --horizontal-btn,
    linear-gradient(
      90deg,
      #789461 0%,
      #789461 0.01%,
      #50623a 47.95%,
      #294b29 99.9%
    )
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 800 46px/1.0 Montserrat, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 43px;
  }
`;

const Descricao = styled.p`
  color: #000;
  font: 500 16px/1.5 Mulish, sans-serif;
  margin-top: 1.5vh;
`;

export default TextosContato;
