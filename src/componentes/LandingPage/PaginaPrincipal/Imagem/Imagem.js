import styled from "styled-components";
import ImgLanding from "../../../../assets/Homem.svg";

const ImagemLanding = styled.img`
  max-width: 100%;
  max-height: 96vh;
`;

const Imagem = () => {
    return <ImagemLanding src={ImgLanding} alt="Um homem de pele escura com camiseta polo e boné da cor azul escuro, sorrindo com algumas caixas de papelão na mão direita." className="img-homem" />
}

export default Imagem;