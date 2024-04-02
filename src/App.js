import React from "react";
import styled from "styled-components";
import Logo from "./componentes/Logo/Logo";
import Navigation from "./componentes/Navbar/Navbar";
import PaginaPrincipal from "./componentes/LandingPage/PaginaPrincipal/PaginaPrincipal";
import SobreNos from "./componentes/LandingPage/SobreNos/Sobrenos";
import Vantagens from "./componentes/LandingPage/Vantagens/Vantagens";
import CadastroLogin from "./componentes/Navbar/Buttons/Buttons";


const AppContainer = styled.div`
  font-family: "Open Sans", "Montserrat", "Mulish", Arial, Helvetica, sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  box-sizing: border-box;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;

const AppHeader = styled.div`
  position: relative;
  display: flex;
`;


function App() {
  return (
    <AppContainer>
      <AppHeader>
        <Logo></Logo>
        <Navigation></Navigation>
        <CadastroLogin/>
      </AppHeader>

      <PaginaPrincipal></PaginaPrincipal>
      <SobreNos></SobreNos>
      <Vantagens></Vantagens>
    </AppContainer>
  );
}

export default App;
