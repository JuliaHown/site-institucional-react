import styled from "styled-components";

import Links from "../Navbar/Navbar";
import LoginCadastro from "../Navbar/Buttons/Buttons";
import LogoEmpresa from "../Logo/Logo";

function Navigation() {
  return (
    <NavigationContainer>
      <LogoEmpresa />
        <Links />
        <LoginCadastro />
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  display: flex;
  width: 100%;
`;


export default Navigation;
