import logotipo from "../../assets/LogoPadrao.svg";
import styled from "styled-components";

const LogoEmpresa = styled.div`
  display: flex;
  align-items: center;
  padding: 2.4vw;
  margin-left: 2.6vw;
  align-content: center;

  img {
    width: auto;
    height: 43px;
    margin-right: 8px;
  }
`;

const Logo = () => {
  return (
    <LogoEmpresa>
      <img src={logotipo}
        alt="Logo da empresa é um desenho de uma mão segurando uma caixa na cor verde escuro"
      />
    </LogoEmpresa>
  );
};

export default Logo;