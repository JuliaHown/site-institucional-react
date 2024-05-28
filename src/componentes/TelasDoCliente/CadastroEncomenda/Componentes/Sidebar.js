import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../../../assets/LogoPadrao.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function MenuUsuario() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <PageContainer>
      <HamburgerMenu id="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
      </HamburgerMenu>
      <Sidebar menuOpen={menuOpen}>
        <Imagem src={Logo} alt="Logo da empresa Zé Porteiro" />
        <Links menuOpen={menuOpen}>
          <Link onClick={() => window.location.href = '/pagina-inicial'}>
            Página Inicial
          </Link>
          <Link onClick={() => window.location.href = '/cadastrar-encomenda'}>
            Cadastrar Encomendas
          </Link>
          <Link onClick={() => window.location.href = '/estoque'}>
            Estoque
          </Link>
          <Link onClick={() => window.location.href = '/apartamentos'}>
            Apartamentos
          </Link>
          <Link onClick={() => window.location.href = '/porteiros'}>
            Porteiros
          </Link>
          <Link onClick={() => window.location.href = '/login'}>
            SAIR
          </Link>
        </Links>
      </Sidebar>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  padding: 20px;
  width: 200px;
  position: fixed;
  top: 0;
  left: ${({ menuOpen }) => (menuOpen ? '0' : '-220px')};
  height: 100vh;
  background-color: #50623A;
  transition: left 0.3s ease-in-out;
  z-index: 1000;

  @media (min-width: 768px) {
    position: static;
    width: 200px;
    margin-left: 6vw;
    height: auto;
    background-color: transparent;
    left: 0;
    transition: none;
  }

  /* Aplica a margem superior apenas quando o menu está aberto */
  ${({ menuOpen }) =>
    menuOpen &&
    `
    & > ${Links} {
      margin-top: 15vh;
    }
    & > ${Imagem} {
      margin-top: 15vh;
    }
  `}
`;

const Imagem = styled.img`
  width: 160px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  font-weight: 600;
`;

const Link = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 10px;
  font-size: 19px;
  line-height: 40px;
  cursor: pointer;
`;

const HamburgerMenu = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export default MenuUsuario;
