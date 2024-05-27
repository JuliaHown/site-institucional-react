import React from "react";
import Style from "../../TelasDoCliente/ClientStyle";
import styled from "styled-components";
import MenuLateral from "../CadastroEncomenda/Componentes/Sidebar"

const InformacoesCondominio = () => (
  <Card>
    <CabecalhoCard>
      <TituloCard>Informações do condomínio</TituloCard>
      <ImagemCard src="https://cdn.builder.io/api/v1/image/assets/TEMP/d596939f399d01d3998483aa05828c6f5bd62a8e2fbdd1aedbb8d7bc9c7c58b1?apiKey=47f1cd04243243c1a2a2819ee899bf9a&" />
    </CabecalhoCard>
    <ConteudoCard>
      <InfoItem label="Endereço" content="Rua Quatorze de Abril, 987 - Alta da Lapa" />
      <InfoItem label="CEP" content="01234-5678" />
      <InfoItem label="Estado" content="São Paulo" />
      <InfoItem label="Cidade" content="São Paulo" />
      <InfoItem label="Possui blocos?" content="Sim" />
      <InfoItem label="Síndico(a)" content="Evandro Costa de Souza" />
    </ConteudoCard>
  </Card>
);

const InfoItem = ({ label, content }) => (
  <div>
    <Label>{label}</Label>
    <br />
    {content}
    <br />
  </div>
);

const PaginaPrincipal = () => (
  <Principal>
    <MenuLateral />
    <Container>
      <Cabecalho>
        <Breadcrumb>
          <Avatar src="https://cdn.builder.io/api/v1/image/assets/TEMP/60d34928ffa983fd9a943f1afab829c65eeb87eb69b527f6d0ab7fe5594c22f6?apiKey=47f1cd04243243c1a2a2819ee899bf9a&" />
          <ItemNavegacao>Usuário</ItemNavegacao>
          <ItemNavegacao>/</ItemNavegacao>
          <ItemNavegacao>Página Inicial</ItemNavegacao>
        </Breadcrumb>
      </Cabecalho>
      <Imagem srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/115d262c-fa31-4ee5-a20e-9bd9efdb76ff?apiKey=47f1cd04243243c1a2a2819ee899bf9a&" />
      <Conteudo>
        <Style />
        <Colunas>
          <Coluna>
            <InformacoesCondominio />
          </Coluna>
          <Coluna>
            <Card>
              <CabecalhoCard>
                <TituloCard>Informações do síndico(a)</TituloCard>
              </CabecalhoCard>
              <ConteudoCard>
                <InfoItem label="Nome Completo" content="Evandro Costa de Souza" />
                <InfoItem label="Documento de Identidade" content="01.234.567-89" />
                <InfoItem label="Telefone Celular" content="(11) 91234-5678" />
              </ConteudoCard>
              <ImagemCard src="https://cdn.builder.io/api/v1/image/assets/TEMP/8efe75ca66e1f6dca84db09ae4ee9f479b228950ed5a0d5138b5dcf1570e9098?apiKey=47f1cd04243243c1a2a2819ee899bf9a&" />
            </Card>
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
  min-height: 100vh;
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

const Breadcrumb = styled.div`
  display: flex;
  gap: 12px;
`;

const Avatar = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`;

const ItemNavegacao = styled.div`
  font-family: Open Sans, sans-serif;
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
  gap: 20px;
  display: flex;

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
  
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0px 18px 40px 0px rgba(112, 144, 176, 0.12);
  background-color: var(--Secondary-Primary-White, #fff);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 8px 0 0x;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 34px;
    padding: 0 20px;
  }
`;

const CabecalhoCard = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  color: #477240;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 140%;
`;

const TituloCard = styled.div`
  font-family: DM Sans, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const ImagemCard = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 17px;
  align-self: start;
`;

const ConteudoCard = styled.div`
  color: #787878;
  letter-spacing: -0.32px;
  margin-top: 18px;
  font: 400 16px/26px DM Sans, sans-serif;
`;

const Label = styled.span`
  font-weight: 700;
`;

export default PaginaPrincipal;