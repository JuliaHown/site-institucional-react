import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Navigation from "./componentes/Navigation/Navigation";

import PaginaPrincipal from "./componentes/LandingPage/PaginaPrincipal/PaginaPrincipal";
import SobreNos from "./componentes/LandingPage/SobreNos/Sobrenos";
import Vantagens from "./componentes/LandingPage/Vantagens/Vantagens";
import Aplicativo from "./componentes/LandingPage/Aplicativo/Aplicativo";
import Footer from "./componentes/Footer/Footer";



const AppContainer = styled.div`
  font-family: 'Open Sans', 'Montserrat', 'Mulish', Arial, Helvetica, sans-serif;
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
    <>
      <GlobalStyle />

      <AppContainer>
        <AppHeader>
          <Navigation />
        </AppHeader>

        <PaginaPrincipal />
        <SobreNos />
        <Vantagens />
        <Aplicativo />
        <Footer/>
        
      </AppContainer>

    </>
  );
}

export default App;
