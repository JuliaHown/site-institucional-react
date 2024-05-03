import styled from "styled-components";

import FormContato from "./componentes/Formulario";
import TituloDescricao from "./componentes/Textos";
import BarraNavegacao from "../../componentes/Navigation/Navigation";
import Footer from "../../componentes/Footer/Footer";

function Contrate() {
  return (
    <main>
      <BarraNavegacao />
      <Section>
        <Content>
          <TituloDescricao />
        </Content>
        <Content>
          <FormContato />
        </Content>
      </Section>
      <Footer />
    </main>
  );
}

const Section = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 13vh;
  margin-bottom: 20vh;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Content = styled.section`
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default Contrate;
