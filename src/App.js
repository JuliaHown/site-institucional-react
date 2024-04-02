import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Logo from "./componentes/Logo/Logo";
import Navigation from "./componentes/Navbar/Navbar";
import PaginaPrincipal from "./componentes/LandingPage/PaginaPrincipal/PaginaPrincipal";
import SobreNos from "./componentes/LandingPage/SobreNos/Sobrenos";
import Vantagens from "./componentes/LandingPage/Vantagens/Vantagens";
import CadastroLogin from "./componentes/Navbar/Buttons/Buttons";


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
          <Logo />
          <Navigation />
          <CadastroLogin />
        </AppHeader>

        <PaginaPrincipal />
        <SobreNos />
        <Vantagens />
      </AppContainer>

    </>
  );
}

export default App;
