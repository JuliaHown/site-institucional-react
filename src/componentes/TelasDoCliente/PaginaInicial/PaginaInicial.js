import React from "react";
import Style from "../../TelasDoCliente/ClientStyle";
import styled from "styled-components";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import MenuLateral from "../CadastroEncomenda/Componentes/Sidebar";
import InfoDoCondominio from "./componentes/InfoCondominio";
import InfoDoSindico from "./componentes/InfoSindico";

const PaginaPrincipal = () => (
  <Principal>
    <MenuLateral />
    <Container>
      <Cabecalho>
        <Breadcrumb>
          <Breadcrumb.Item active></Breadcrumb.Item>
        </Breadcrumb>
      </Cabecalho>
      <Imagem srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&" />
      <Conteudo>
        <Style />
        <Colunas>
          <Coluna>
            <InfoDoCondominio />
          </Coluna>
          <Coluna>
            <InfoDoSindico />
          </Coluna>
        </Colunas>
      </Conteudo>
    </Container>
  </Principal>
);

const Principal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  width: 80%;
  max-height: 100vh;
  overflow-y: auto;
  margin: 10px 0;
  align-items: center;
  margin-left: 6vw;
  margin-right: 5vw;
  gap: 20px; 

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Cabecalho = styled.div`
  justify-content: center;
  align-items: start;
  background-color: var(--Light-Background, #fff);
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--Light-Text-Color-1, #28292d);
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 140%;
  margin: 0 26px;
  padding: 17px 30px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    padding: 0 20px;
  }
`;

const Imagem = styled.img`
  aspect-ratio: 4.55;
  object-fit: auto;
  object-position: center;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Conteudo = styled.div`
  width: 880px;
  max-width: 100%;
  margin: 40px 0 0 100px;
  font-size: 12px;
`;

const Colunas = styled.div`
  gap: 50px;
  display: flex;
  margin-right: 6vw;
  justify-content: center;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  margin-bottom: 9vh;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default PaginaPrincipal;
