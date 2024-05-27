import React from "react";
import Style from "../ClientStyle";
import ListaEncomenda from "./Componentes/Tabela/ListaApartamento";
import styled from "styled-components";
import MenuLateral from "../CadastroEncomenda/Componentes/Sidebar";
import Logo from "../Logo/LogoEmpresa";

const Apartamentos = () => (
  <ContainerWrapper>
    <Style />
    <MenuLateral />
    <ContentWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ListaEncomenda />
    </ContentWrapper>
  </ContainerWrapper>
);

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  border-radius: 30px;
  margin-left: 6vw;
  margin-right: 4.5vw;
  overflow-y: auto;
  height: 88vh;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;

export default Apartamentos;