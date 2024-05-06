import styled from "styled-components";
import ButtonContratar from "./BotaoContrate/ButtonContratar";

const Container = styled.div`
  padding: 20% 0;
  background-color: #789461;
  height: 880px;
`;

const TextosContainer = styled.div`
  display: absolute;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  margin-left: 17%;
  margin-bottom: 3%;
`;

const TextoPrincipal = styled.h1`
  font-size: 4.5rem;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 700;
  background-color: var(--verde-escuro);
  -webkit-background-clip: text;
  background-clip: text;
  color: var(--verde-escuro);
  line-height: 1;
  margin-bottom: 3.5%;
  text-align: center;
`;

const TextoEmDestaque = styled.span`
  color: #ffffff;
`;

const Descricao = styled.p`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  line-height: 1.5;
`;

const redirecionarPagina = () => {
  window.location.href = "/contrate";
};

function sobreNos() {
  return (
    <Container>
      <TextosContainer>
        <TextoPrincipal>
          <TextoEmDestaque>Conveniência</TextoEmDestaque> e{" "}
          <TextoEmDestaque>Agilidade</TextoEmDestaque> <br /> para seu
          condomínio
        </TextoPrincipal>
        <Descricao>
          A Zé Porteiro simplifica a gestão de encomendas em condomínios,
          priorizando a comunicação rápida, facilidade na retirada e eliminação
          da burocracia. Nosso objetivo é facilitar a vida de síndicos,
          administradores e moradores, oferecendo uma abordagem moderna e eficaz
          para lidar com o fluxo de encomendas.
        </Descricao>
      </TextosContainer>
      <ButtonContratar onClick={redirecionarPagina}>Contrate Já</ButtonContratar>
    </Container>
  );
}

export default sobreNos;
