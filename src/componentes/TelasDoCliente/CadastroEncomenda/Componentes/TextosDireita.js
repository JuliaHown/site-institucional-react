import React from "react";
import styled from "styled-components";

const NovaFuncionalidade = () => (
  <Container>
    <Titulo>Ou se preferir, utilize nossa nova funcionalidade</Titulo>
    <Texto>
      Usando o seu celular, scaneie as informações
      <br />
      da encomendas e pronto, a IA irá cadastrar os
      <br />
      dados do destinatário automaticamente. Fácil e rápido
      <br />
      para automatizar a sua rotina.
    </Texto>
    <Botao>Utilize agora essa funcionalidade</Botao>
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  max-width: 611px;
  flex-direction: column;
  font-size: 16px;
  text-align: center;
`;

const Titulo = styled.div`
  color: #183c18;
  font-family: Inter, sans-serif;
  font-weight: 700;
`;

const Texto = styled.div`
  color: #000;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  align-self: stretch;
  margin-top: 56px;
  width: 100%;
`;

const Botao = styled.div`
  color: #294b29;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  margin-top: 56px;
`;

export default NovaFuncionalidade;
