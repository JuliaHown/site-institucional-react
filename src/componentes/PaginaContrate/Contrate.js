import * as React from "react";
import styled from "styled-components";

function Contrate() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Transforme o modo de organização das suas entregas
        </HeroTitle>
        <HeroDescription>
          Preencha os campos do formulário ao lado sobre a sua empresa e um dos
          nossos agentes entrará em contato com você;
        </HeroDescription>
      </HeroContent>
      <ContactForm>
        <Label htmlFor="name" className="sr-only">
          Nome do Responsável
        </Label>
        <Input
          type="text"
          id="name"
          placeholder="Nome do Responsável"
          aria-label="Nome do Responsável"
        />
        <Label htmlFor="email" className="sr-only">
          E-mail para contato
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="E-mail para contato"
          aria-label="E-mail para contato"
        />
        <PhoneInputs>
          <PhoneInputWrapper>
            <Label htmlFor="areaCode" className="sr-only">
              DDD
            </Label>
            <Input
              type="tel"
              id="areaCode"
              placeholder="DDD"
              aria-label="DDD"
            />
          </PhoneInputWrapper>
          <PhoneInputWrapper>
            <Label htmlFor="phone" className="sr-only">
              Telefone
            </Label>
            <Input
              type="tel"
              id="phone"
              placeholder="Telefone"
              aria-label="Telefone"
            />
          </PhoneInputWrapper>
        </PhoneInputs>
        <SubmitButton type="submit">Contrate agora</SubmitButton>
      </ContactForm>
    </HeroSection>
  );
}

function MyComponent() {
  return (
    <PageWrapper>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 51px;
`;

const AppIcon = styled.img`
  width: 100px;
  max-width: 100%;
  aspect-ratio: 2.5;
  object-fit: contain;
`;

const HeroSection = styled.section`
  display: flex;
  width: 100%;
  max-width: 1586px;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  flex: 1;
  margin: auto 0;
`;

const HeroTitle = styled.h1`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    #789461 0%,
    #789461 0.01%,
    #50623a 47.95%,
    #294b29 99.9%
  );
  font: 800 66px/63px Montserrat, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 43px;
  }
`;

const HeroDescription = styled.p`
  color: #000;
  margin-top: 13px;
  font: 500 19px/29px Mulish, sans-serif;

  @media (max-width: 991px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ContactForm = styled.form`
  border-radius: 30px;
  background-color: #789461;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  padding: 66px 80px;

  @media (max-width: 991px) {
    padding: 40px;
  }
`;

const Label = styled.label`
  color: #fff;
  align-self: start;
  margin-left: 10px;
  font: 600 15px/123% Open Sans, sans-serif;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 1px solid rgba(180, 180, 180, 1);
  background-color: #fff;
  margin-top: 10px;
  color: #909090;
  padding: 16px 19px;
  font: 400 14px/123% Open Sans, sans-serif;

  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const PhoneInputs = styled.div`
  display: flex;
  margin-top: 52px;
  gap: 3px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const PhoneInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  line-height: 123%;
`;

const SubmitButton = styled.button`
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(41, 75, 41, 1);
  background-color: #477240;
  margin-top: 56px;
  color: #fff;
  text-align: center;
  padding: 19px 35px;
  font: 800 22px/286% Mulish, sans-serif;
  cursor: pointer;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 15px 20px;
    font-size: 18px;
  }
`;

export default MyComponent;