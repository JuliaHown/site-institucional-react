import React from "react";
import styled from "styled-components";

const footerData = [
  {
    title: "Empresa",
    links: ["Sobre nós", "Contrate"],
  },
  {
    title: "Contato",
    links: ["(11) 1234-5678", "São Paulo, SP - Brasil"],
  },
];

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <CompanyInfo>
          <CompanyLogo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f80e6be4c5260ca05efce557ed4d48e3c14d7e0a42b874cabf5bfd0e902df8?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
            alt="Logo da Empresa Zé Porteiro"
          />
          <CompanyDescription>
            A nova era para a gestão de encomendas <br/> dos condomínios
          </CompanyDescription>
        </CompanyInfo>
        <FooterLinks>
          {footerData.map((section, index) => (
            <FooterLinkSection key={index}>
              <FooterLinkTitle>{section.title}</FooterLinkTitle>
              {section.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex}>{link}</FooterLink>
              ))}
            </FooterLinkSection>
          ))}
        </FooterLinks>
        <AppDownload>
          <AppLogo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaf85ad4f466be3ef9007ef7dcb0f90829f63c905826221bd57dbfe32871041f?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
            alt="Logo do Aplicativo"
          />
          <DownloadText>Baixe o nosso aplicativo</DownloadText>
          <AppLinks>
            <AppLink
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ba461d84b978c5ae42c093b4c45bbc694ee56b44d203c48016d2412472ea7d?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
              alt="App Store"
            />
            <AppLink
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/090aebfeb1b390ecdb50ec7686d72c44e95d2e680f411313a0c60984e50d0cc0?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
              alt="Google Play"
            />
          </AppLinks>
        </AppDownload>
      </FooterContent>
      <Copyright>
        <span>© Copyright 2024 Zé Porteiro</span>
      </Copyright>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: linear-gradient(
    90deg,
    #789461 0%,
    #789461 0.01%,
    #50623a 47.95%,
    #294b29 99.9%
  );
  padding: 13vh 10vw 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;

  @media (max-width: 991px) {
    padding: 0 2vw;
  }
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 95vw;
  justify-content: space-between;
  align-items: start;
  gap: 2vw;
  margin-top: -5vh;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  color: #fff;
  font-size: 1.6vh;
  font-weight: 400;
  line-height: 2.3vh;
`;

const CompanyLogo = styled.img`
  width: 17vw;
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

const CompanyDescription = styled.p`
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  margin-top: -1vh;
  margin-left: 1.5vh;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 5.6vw;
  color: #fff;
  font-size: 1.4vh;
  font-weight: 500;
  line-height: 100%;
  margin: auto 0;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const FooterLinkSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7vh;
`;

const FooterLinkTitle = styled.h3`
  font: 2.1vh Montserrat, sans-serif;
  margin-bottom: 0.7vh;
`;

const FooterLink = styled.a`
  font-family: Montserrat, sans-serif;
`;

const AppDownload = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2vh;
`;

const AppLogo = styled.img`
  width: 6.5vw;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;

const DownloadText = styled.p`
  color: #fff;
  margin-top: 1.7vh;
  font: 500 1.5vh/154% Montserrat, sans-serif;
`;

const AppLinks = styled.div`
  display: flex;
  gap: 0.3vh;
  margin-top: 0.8vh;
`;

const AppLink = styled.img`
  width: 6vw;
  max-width: 100%;
  height: auto;
  margin-left: -0.3vw;
  cursor: pointer;

  &:last-child {
    width: 6vw;
    margin: auto 0;
  }
`;

const Copyright = styled.div`
  color: #fff;
  text-align: center;
  font: 500 1vh/154% Montserrat, sans-serif;
`;


export default Footer;
