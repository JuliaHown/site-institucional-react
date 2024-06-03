import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import BarraNavegacao from "../Navigation/Navigation";
import Titulos from "./componentes/Titulo";
import Imagem from "./componentes/Imagem";
import MeioTextos from "./componentes/MeioConteudo";
import Body from "./componentes/Body";
import BotaoScroll from '../BotaoScrollUp/BotaoScroll';
import Footer from "../Footer/Footer";


function SobreNos() {

  const [mostrarBotao, setMostrarBotao] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setMostrarBotao(true);
    } else {
      setMostrarBotao(false);
    }
  };

  const rolarParaTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section>
      <BarraNavegacao />
      <Titulos />
      <Imagem />
      <MeioTextos/>
      <Body/>
      <BotaoScroll mostrar={mostrarBotao} aoClicar={rolarParaTopo} />
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
