import React, { useState, useEffect } from 'react';
import Style from "../../TelasDoCliente/ClientStyle";
import styled from "styled-components";
import MenuLateral from "../CadastroEncomenda/Componentes/Sidebar"

const InformacoesCondominio = () => {
  const [condominio, setCondominio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const atualizarCondominio = async (condominioId) => {
      try {
        const response = await fetch(`http://localhost:8080/condominios/${condominioId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nome: 'Novo Nome do Condomínio',
            cep: '98765-432',
            logradouro: 'Nova Rua',
            numero: '456',
            bairro: 'Novo Bairro',
            cidade: 'Nova Cidade',
          })
        });
        const data = await response.json();
        setCondominio(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao atualizar o condomínio:', error);
        setIsLoading(false);
      }
    };

    const condominioIdDoUsuario = 123; 

    atualizarCondominio(condominioIdDoUsuario);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        condominio ? (
          <Card>
            <CabecalhoCard>
              <TituloCard>Informações do condomínio</TituloCard>
            </CabecalhoCard>
            <ConteudoCard>
              <InfoItem label="Nome" content={condominio.nome} />
              <InfoItem label="Endereço" content={`${condominio.logradouro}, ${condominio.numero}`} />
              <InfoItem label="CEP" content={condominio.cep} />
              <InfoItem label="Bairro" content={condominio.bairro} />
              <InfoItem label="Cidade" content={condominio.cidade} />
            </ConteudoCard>
          </Card>
        ) : (
          <p>Não foi possível carregar as informações do condomínio.</p>
        )
      )}
    </div>
  );
};

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
  width: 80%; /* Alterei o tamanho do card */
  padding: 8px 0 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 34px;
    padding: 0 20px;
  }
`;

const CabecalhoCard = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px; /* Alterei o tamanho do texto do cabeçalho */
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
  font: 400 14px/24px DM Sans, sans-serif; /* Alterei o tamanho do texto do conteúdo */
`;

const Label = styled.span`
  font-weight: 700;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default PaginaPrincipal;