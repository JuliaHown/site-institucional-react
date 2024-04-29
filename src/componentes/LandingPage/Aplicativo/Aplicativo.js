import styled from "styled-components";
import Celular from "../../../assets/Iphone.svg";
import GooglePlay from "../../../assets/google play.svg";
import Fonts from '../../../Fonts';

const MainContainer = styled.div`
  background-color: var(--background);
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px;
  margin-top: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1vw;
  display: flex;
`;

const ImgCelular = styled.div`
  width: 70%;
  height: auto;

  img {
    width: 50%;
    height: auto;
    margin-top: 10vh;
    margin-left: 16vw;
    margin-bottom: 12vh;
  }
`;

const TextosContainer = styled.div`
  width: 70%;
  padding: 20px;
  flex-direction: column;
  margin-top: 29vh;
  margin-right: 7vw;

  h1 {
    font-family: Montserrat
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  span {
  font-size: 15px;
  }
`;

const LojaAplicativo = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 31%;
    height: auto;
    margin-top: 2vh;
    margin-left: -0.5vw;
  }
`;

function Aplicativo() {
  return (
    <MainContainer>
      <ImgCelular>
        <img
          src={Celular}
          alt="Imagem de um celular com o aplicativo Zé Porteiro na tela do dispostivo."
        />
      </ImgCelular>

      <TextosContainer>
        <h1>Baixe o nosso aplicativo</h1>
        <span>
          Simplifique sua rotina e economize tempo baixando o aplicativo Zé
          Porteiro. Receba notificações em tempo real sobre suas entregas e faça
          retiradas sem complicações. Experimente agora e aproveite ao máximo
          seu tempo.
        </span>

        <LojaAplicativo>
          <img
            src={GooglePlay}
            alt="Icone que redireciona para a loja de aplicativos da Google"
          />
        </LojaAplicativo>
      </TextosContainer>
    </MainContainer>
  );
}

export default Aplicativo;
