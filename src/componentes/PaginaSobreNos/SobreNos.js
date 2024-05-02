import React from "react";
import styled from "styled-components";

import BarraNavegacao from "../Navigation/Navigation";
import Titulos from "./componentes/Titulo";
import Imagem from "./componentes/Imagem";
import MeioTextos from "./componentes/MeioConteudo";
import Body from "./componentes/Body";
import Footer from "../Footer/Footer";


function SobreNos() {
  return (
    <Section>
      <BarraNavegacao />
      <Titulos />
      <Imagem />
      <MeioTextos/>
      <Body/>
      <Footer/>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default SobreNos;
