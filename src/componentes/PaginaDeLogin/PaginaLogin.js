import * as React from "react";
import styled from "styled-components";

const LoginPage = () => {
  const backLinks = [
    {
      label: "Voltar para o site",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/535c204736268acf29c76b8db1a0122ffbcb8b208c33add60691586105df7ee5?apiKey=47f1cd04243243c1a2a2819ee899bf9a&",
    },
  ];

  return (
    <PageWrapper>
      <ContentWrapper>
        <BackLinkWrapper>
          {backLinks.map((link, index) => (
            <BackLink key={index}>
              <BackLinkIcon src={link.icon} alt="Back link icon" />
              <BackLinkText>{link.label}</BackLinkText>
            </BackLink>
          ))}
        </BackLinkWrapper>
        <LoginFormWrapper>
          <LoginTitle>Faça o seu login</LoginTitle>
          <LoginSubtitle>
            Digite o seu email e sua senha para fazer login
          </LoginSubtitle>
          <LoginForm>
            <InputLabel htmlFor="email">
              Email<RequiredMark>*</RequiredMark>
            </InputLabel>
            <InputWrapper>
              <Input
                type="email"
                id="email"
                placeholder="Digite o seu email"
                required
              />
            </InputWrapper>
            <InputLabel htmlFor="password">
              <PasswordLabel>Senha</PasswordLabel>
              <RequiredMark>*</RequiredMark>
            </InputLabel>
            <PasswordInputWrapper>
              <PasswordInputField>
                <PasswordInput
                  type="password"
                  id="password"
                  placeholder="Digite a sua senha"
                  required
                />
                <PasswordIcon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f93281bd2e155dc8346c0ad62b4de0485e1878ce0a3711af246595a6810b08e?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
                  alt="Password icon"
                />
              </PasswordInputField>
            </PasswordInputWrapper>
            <LoginOptions>
              <RememberMeWrapper>
                <RememberMeCheckbox type="checkbox" id="rememberMe" />
                <RememberMeLabel htmlFor="rememberMe">
                  Mantenha-me logado
                </RememberMeLabel>
              </RememberMeWrapper>
              <ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
            </LoginOptions>
            <LoginButton type="submit">Fazer Login</LoginButton>
          </LoginForm>
          <SignUpPrompt>
            <SignUpText>Ainda não possui uma conta?</SignUpText>
            <SignUpLink>Crie uma agora</SignUpLink>
          </SignUpPrompt>
        </LoginFormWrapper>
      </ContentWrapper>
      <BackgroundWrapper>
        <BackgroundImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea828b08a6519d53bf77151992e1867d7ab0a30dab52f652f6cf66f40e9d7728?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
          alt="Background"
        />
        <ForegroundImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0acfdbdc781e9ce61f919c3e7b40de0a0eaf6a692240ff77acb85143a2ed375e?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
          alt="Foreground"
        />
      </BackgroundWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 80px 60px 0 80px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 40px 20px 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;

  @media (max-width: 991px) {
    margin-top: 40px;
    max-width: 100%;
  }
`;

const BackLinkWrapper = styled.div`
  align-self: start;
  display: flex;
  gap: 6px;
`;

const BackLink = styled.a`
  align-items: center;
  color: var(--text-color, #6d7283);
  display: flex;
  font-size: 14px;
  font-weight: 500;
  gap: 6px;
  letter-spacing: -0.28px;
  line-height: 214%;
  text-decoration: none;
`;

const BackLinkIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const BackLinkText = styled.span`
  font-family: DM Sans, sans-serif;
`;

const LoginFormWrapper = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: 100%;
  margin-top: 188px;
  padding-left: 69px;

  @media (max-width: 991px) {
    margin-top: 40px;
    max-width: 100%;
    padding-left: 0;
  }
`;

const LoginTitle = styled.h1`
  align-self: center;
  color: #2b3674;
  font: 700 36px/156% DM Sans, sans-serif;
  letter-spacing: -0.72px;
`;

const LoginSubtitle = styled.p`
  color: var(--text-color, #6d7283);
  font: 400 16px DM Sans, sans-serif;
  letter-spacing: -0.32px;
  margin-top: 15px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const InputLabel = styled.label`
  color: #477240;
  font-family: DM Sans, sans-serif;
  font-weight: 500;
  margin-top: 50px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const RequiredMark = styled.span`
  color: rgba(71, 114, 64, 1);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  margin-top: 15px;
`;

const Input = styled.input`
  border: 1px solid rgba(224, 229, 242, 1);
  border-radius: 16px;
  color: var(--text-color, #6d7283);
  font-family: DM Sans, sans-serif;
  font-weight: 400;
  padding: 19px 24px;

  @media (max-width: 991px) {
    padding: 19px 20px;
  }

  &::placeholder {
    color: var(--text-color, #6d7283);
  }
`;

const PasswordLabel = styled.span`
  color: #6b6b6b;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`;

const PasswordInputField = styled.div`
  align-items: center;
  border: 1px solid rgba(224, 229, 242, 1);
  border-radius: 16px;
  display: flex;
  gap: 20px;
  padding: 15px 21px;

  @media (max-width: 991px) {
    padding: 15px 20px;
  }
`;

const PasswordInput = styled.input`
  border: none;
  color: var(--text-color, #6d7283);
  flex: 1;
  font-family: DM Sans, sans-serif;
  font-weight: 400;

  &::placeholder {
    color: var(--text-color, #6d7283);
  }
`;

const PasswordIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const LoginOptions = styled.div`
  display: flex;
  gap: 20px;
  line-height: 143%;
  margin-top: 23px;
  width: 100%;
`;

const RememberMeWrapper = styled.div`
  align-items: center;
  color: #2b3674;
  display: flex;
  flex: 1;
  font-weight: 400;
  gap: 3px;
`;

const RememberMeCheckbox = styled.input`
  accent-color: #2b3674;
  height: 18px;
  width: 18px;
`;

const RememberMeLabel = styled.label`
  font-family: DM Sans, sans-serif;
`;

const ForgotPasswordLink = styled.a`
  color: var(--sweet-green, #81966d);
  flex: 1;
  font-family: DM Sans, sans-serif;
  font-weight: 500;
  text-align: right;
  text-decoration: none;
`;

const LoginButton = styled.button`
  align-items: center;
  background-color: #50623a;
  border: none;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  font: 700 16px DM Sans, sans-serif;
  justify-content: center;
  margin-top: 29px;
  padding: 19px;
  text-align: center;
  width: 100%;

  @media (max-width: 991px) {
    padding: 19px 20px;
  }
`;

const SignUpPrompt = styled.div`
  align-self: center;
  display: flex;
  gap: 8px;
  line-height: 143%;
  margin-top: 20px;
`;

const SignUpText = styled.p`
  color: #2b3674;
  font-family: DM Sans, sans-serif;
  font-weight: 400;
`;

const SignUpLink = styled.a`
  color: #477240;
  font-family: DM Sans, sans-serif;
  font-weight: 700;
  text-decoration: none;
`;

const BackgroundWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  min-height: 1019px;
  overflow: hidden;
  padding: 80px 60px;
  position: relative;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 40px 20px;
  }
`;

const BackgroundImage = styled.img`
  height: 100%;
  inset: 0;
  object-fit: cover;
  object-position: center;
  position: absolute;
  width: 100%;
`;

const ForegroundImage = styled.img`
  aspect-ratio: 0.96;
  gap: 0px;
  margin-top: -79px;
  object-fit: contain;
  object-position: center;
  width: 100%;
`;

export default LoginPage;
