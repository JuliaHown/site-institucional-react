import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function TabelaPorteiro() {
  const [porteiros, setPorteiros] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const porteirosPorPagina = 5;

  useEffect(() => {
    const fetchPorteiros = async () => {
      try {
        const response = await axios.get("http://localhost:8080/porteiros");
        setPorteiros(response.data);
      } catch (error) {
        console.error("Erro ao buscar os porteiros:", error);
      }
    };

    fetchPorteiros();
  }, []);

  useEffect(() => {
    const novoPorteiro = {
      id: "101",
      nome: "Maria da Silva",
      email: "maria.silva@gmail.com",
      turno: "A",
      rg: "12.345.678-9",
      telefone: "(11) 91234-5678",
    };

    setPorteiros((prevPorteiros) => [novoPorteiro, ...prevPorteiros]);
  }, []);

  const indiceUltimoPorteiro = paginaAtual * porteirosPorPagina;
  const indicePrimeiroPorteiro = indiceUltimoPorteiro - porteirosPorPagina;
  const porteirosPaginaAtual = porteiros.slice(
    indicePrimeiroPorteiro,
    indiceUltimoPorteiro
  );

  const mudarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <ContainerWrapper>
      <ContentWrapper>
        <Container>
          <Cabecalho />
          <TabelaDePorteiros porteiros={porteirosPaginaAtual} />
          <Paginacao
            totalPaginas={Math.ceil(porteiros.length / porteirosPorPagina)}
            paginaAtual={paginaAtual}
            mudarPagina={mudarPagina}
          />
        </Container>
      </ContentWrapper>
    </ContainerWrapper>
  );
}

function Cabecalho() {
  return (
    <CabecalhoContainer>
      <TituloContainer>
        <Titulo>Porteiros</Titulo>
      </TituloContainer>
      <ButtonContainer>
      <ImageWrapper>
        <StyledImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8156a6a6eae06084f8a1efcbad5dddf49aa3c449142c963fe9e5efa1453377c0?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
        />
      </ImageWrapper>
      <AddButton>Adicionar</AddButton>
    </ButtonContainer>
    <ButtonContainer>
      <ImageWrapper>
        <StyledImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8156a6a6eae06084f8a1efcbad5dddf49aa3c449142c963fe9e5efa1453377c0?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
        />
      </ImageWrapper>
      <AddCsvButton>Adicionar com CSV</AddCsvButton>
    </ButtonContainer>
    </CabecalhoContainer>
  );
}

function TabelaDePorteiros({ porteiros }) {
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);

  const selecionarLinha = (index) => {
    setLinhaSelecionada(index);
  };


  return (
    <DadosContainer>
  <LinhaCabecalho>
    <ColunaCabecalho>ID</ColunaCabecalho>
    <ColunaCabecalho>Nome do Porteiro</ColunaCabecalho>
    <ColunaCabecalho>Email</ColunaCabecalho>
    <ColunaCabecalho>Turno</ColunaCabecalho>
    <ColunaCabecalho>RG</ColunaCabecalho>
    <ColunaCabecalho>Telefone</ColunaCabecalho>
  </LinhaCabecalho>
  {porteiros.map((porteiros, index) => (
    <Linha
      key={index}
      onClick={() => selecionarLinha(index)}
      selecionada={linhaSelecionada === index}
    >
      <Coluna>{porteiros.id}</Coluna>
      <Coluna>{porteiros.nome}</Coluna>
      <Coluna>{porteiros.email}</Coluna>
      <Coluna>{porteiros.turno}</Coluna>
      <Coluna>{porteiros.rg}</Coluna>
      <Coluna>{porteiros.telefone}</Coluna>
    </Linha>
  ))}
</DadosContainer>

  );
}

function Paginacao({ totalPaginas, paginaAtual, mudarPagina }) {
  const handleSkipEsquerda = () => {
    mudarPagina(1);
  };

  const handleSkipDireita = () => {
    mudarPagina(totalPaginas);
  };

  const handleNumeroPagina = (numero) => {
    mudarPagina(numero);
  };


  let inicio = Math.max(1, paginaAtual - 2);
  let fim = Math.min(totalPaginas, inicio + 4);
  inicio = Math.max(1, fim - 4);

  return (
    <PaginacaoContainer>
      <BotaoSkip onClick={handleSkipEsquerda}><IoIosArrowBack /></BotaoSkip>
      {[...Array(fim - inicio + 1).keys()].map((offset) => {
        const numeroPagina = inicio + offset;
        return (
          <NumeroPagina
            key={numeroPagina}
            onClick={() => handleNumeroPagina(numeroPagina)}
            ativo={paginaAtual === numeroPagina}
          >
            {numeroPagina}
          </NumeroPagina>
        );
      })}
      <BotaoSkip onClick={handleSkipDireita}><IoIosArrowForward /></BotaoSkip>
    </PaginacaoContainer>
  );
}


const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFFFFF;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  border-radius: 30px;
  margin-left: 5vw;
  margin-right: 5vw;
  overflow-y: auto;
  height: 98vh;
  max-width: 85%;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Container = styled.div`
  align-self: stretch;
  border: 1px solid rgba(227, 228, 232);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  width: 100%;
  overflow: hidden;
  margin-top: 21vh;
  background-color: var(--ghost-white, #f8f8ff);
`;

const CabecalhoContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const TituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  color: var(--dark-green, #294b29);
  font-weight: 600;
  white-space: nowrap;
  text-align: left;
  letter-spacing: 0.12px;
  line-height: 63%;
  justify-content: center;
  flex: 1;
  margin: auto 0;
  font-family: Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const Titulo = styled.div`
  justify-content: center;
  border-radius: 8px;
  padding: 2px 8px;
  font-family: Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

// const AdicionarButton = styled.button`
//   color: var(--Black-Black-500, #727a90);
//   letter-spacing: 0.07px;
//   font: 400 12px/143% Inter, sans-serif;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

// const AdicionarCsvButton = styled.button`
//   color: var(--Black-Black-500, #727a90);
//   letter-spacing: 0.07px;
//   font: 400 12px/143% Inter, sans-serif;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 8px;
  background-color: #50623a;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 16px;
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
`;

const AddButton = styled.div`
  font: 600 16px "Inter", sans-serif;
  letter-spacing: 0.08px;
  color: var(--White, var(--ghost-white, #f8f8ff));
  cursor: pointer;
`;

const AddCsvButton = styled.div`
  font: 600 16px "Inter", sans-serif;
  letter-spacing: 0.08px;
  color: var(--White, var(--ghost-white, #f8f8ff));
  cursor: pointer;
`;


const DadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  margin-top: 2vh;
  height: 43vh;
  overflow-y: auto;
`;

const LinhaCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-weight: bold;
  width: 100%; 
  border: 1px solid rgba(227, 228, 232);
`;

const ColunaCabecalho = styled.div`
  flex: 1;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #727a90;
  font-weight: 600;
`;

const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  background-color: ${(props) =>
    props.selecionada ? "#f5f5f7" : "transparent"};
  cursor: pointer;
  border: 1px solid rgba(227, 228, 232);
  width: 100%; 
`;

const Coluna = styled.div`
  flex: 1;
  text-align: center;
`;

const PaginacaoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid rgba(227, 228, 232);
  padding: 10px 0;
  margin-top: -4.6vh;
`;

const NumeroPagina = styled.div`
  margin: 0 2px;
  justify-content: center;
  border-radius: 10px;
  border-color: rgba(220, 222, 227, 1);
  border-style: solid;
  border-width: 1px;
  width: 4%;
  color: ${(props) => (props.ativo ? "#ffffff" : "#727a90")};
  background-color: ${(props) => (props.ativo ? "#294b29" : "transparent")};
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.07px;
  padding: 6px;
  font: 600 11px/143% Inter, sans-serif;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const BotaoSkip = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export default TabelaPorteiro;