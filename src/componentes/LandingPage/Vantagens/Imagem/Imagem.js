import styled from "styled-components";
import Colagem from "../../../../assets/ColagemFotos.svg";

const ColagemFotos = styled.img`
  max-width: 96%;
  height: auto;
  margin-left: 5vw;
  margin-bottom: 3vh;
`;

function Imagens() {
  return <ColagemFotos src={Colagem} alt="Uma colagem com 3 fotos de pessoas diferentes recebendo encomendas" />;
}

export default Imagens;