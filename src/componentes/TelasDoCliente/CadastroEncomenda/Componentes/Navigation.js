import React from "react";
import styled from "styled-components";

import Breadcrumb from "./Breadcrumb";

const NavigationBar = () => {
  const breadcrumbItems = [
    { label: "Página Inicial", link: "/" },
    { label: "Cadastro Encomenda", link: "/cadastrarencomenda" },
  ];

  return (
    <Container>
      <Header>
        <InfoSection>
          <Avatar src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c8c907b9c4873fa39b902de5a21fddab8811003a29f6425887c1140ffdbb5c0?apiKey=47f1cd04243243c1a2a2819ee899bf9a&" />
          <Breadcrumb items={breadcrumbItems} />
        </InfoSection>
        <ImageContainer>
          <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&" />
        </ImageContainer>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  justify-content: space-between;
  align-items: center; /* Alterado para 'center' */
  border-color: rgba(215, 216, 220, 1);
  border-style: solid;
  border-bottom-width: 1px;
  background-color: var(--Light-Background, #fff);
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 1px 30px 10px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const InfoSection = styled.div`
  align-self: stretch;
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: var(--Light-Text-Color-1, #28292d);
  font-weight: 400;
  white-space: nowrap;
  letter-spacing: 0.25px;
  line-height: 143%;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Avatar = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
`;

const Logo = styled.img`
  width: 158px;
  height: auto;
  object-fit: contain;
  object-position: center;
`;

export default NavigationBar;
