import React from "react";
import styled from "styled-components";

const data = [
  {
    title: "Reduzir o tempo gasto em burocracia e comunicação.",
    description:
      "Diga adeus às horas perdidas em tarefas burocráticas e comunicações intermináveis",
  },
  {
    title: "Gerencie tudo facilmente com apenas alguns cliques.",
    description:
      "Nossa plataforma oferece uma interface intuitiva e fácil de usar",
  },
  {
    title: "Receba suas encomendas sem estresse.",
    description:
      "Nosso sistema é projetado para eliminar as preocupações associadas ao recebimento de pacotes",
  },
  {
    title: "Simplificar o rastreamento e gerenciamento de encomendas.",
    description:
      "Priorizamos garantir que os moradores tenham uma experiência de recebimento de encomendas excepcional",
  },
];

function Funcionalidades() {
  const firstCard = data[0];

  return (
    <Container>
      <Wrapper>
        <ConteudoWrapper>
          <Coluna>
            <Titulo>Nossa solução tem como objetivo</Titulo>
          </Coluna>
          <Coluna>
            <Imagem
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d31f1419a69ef9cb80cdc08a3e342af440567eadbd1bd8c1c05eabf58c9f5ae6?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
              alt="Solução"
            />
          </Coluna>
          <Coluna>
            <Cartao>
              <TituloCaracteristica>{firstCard.title}</TituloCaracteristica>
              <DescricaoCaracteristica>{firstCard.description}</DescricaoCaracteristica>
            </Cartao>
          </Coluna>
        </ConteudoWrapper>
      </Wrapper>
      <ConteudoCaracteristicas>
        {data.slice(1).map((caracteristica, index) => (
          <Cartao key={index}>
            <TituloCaracteristica>{caracteristica.title}</TituloCaracteristica>
            <DescricaoCaracteristica>{caracteristica.description}</DescricaoCaracteristica>
          </Cartao>
        ))}
      </ConteudoCaracteristicas>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1361px;
  padding: 0 20px;
  width: 100%;
`;

const ConteudoWrapper = styled.div`
  display: flex;
  margin-right: 3vw;
  margin-top: 40px; 
  justify-content: center;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin-top: 20px;
  }
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Titulo = styled.h2`
  color: #183c18;
  font: 700 25px/1.5 Montserrat, sans-serif;
  letter-spacing: -1.2px;
  margin-top: 35px; 
  margin-left: 16vw;

  @media (max-width: 991px) {
    text-align: center;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

const Imagem = styled.img`
  width: 74%;
  max-width: 436px;
  margin-left: 4.8vw;
  margin-right: auto;

  @media (max-width: 991px) {
    max-width: 80%;
  }
`;

const Cartao = styled.div`
  background-color: var(--ghost-white, #f8f8ff);
  border: 1px solid rgba(194, 194, 194, 1);
  border-radius: 20px;
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 40px 26px;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 310px; 
  height: 78%; 

  @media (max-width: 991px) {
    max-width: none;
  }
`;

const TituloCaracteristica = styled.h3`
  font: 700 15px/1.5 Montserrat, sans-serif;
  letter-spacing: -0.66px;
  margin-top: 10px;
`;

const DescricaoCaracteristica = styled.p`
  font: 400 13px/1.6 Montserrat, sans-serif;
  letter-spacing: -0.54px;
  margin-top: 10px;
`;

const ConteudoCaracteristicas = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  justify-content: center;
  gap: 2vw;
  margin-top: 20px;
  padding: 0 20px;

  @media (max-width: 991px) {
    gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default Funcionalidades;
