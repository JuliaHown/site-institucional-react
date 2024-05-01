import styled from "styled-components";
import ImagemDaPagina from "../../../assets/Imagem-Login.svg";

function ImagemLogin() {
    return (
        <ImageWrapper>
            <Image src={ImagemDaPagina} alt="Imagem de uma cidade em tons de verde" />
        </ImageWrapper>
    )
}

const ImageWrapper = styled.div`
  width: 50%;
  height: 100vh;
  max-width: 965px;
  overflow: hidden; 
  margin: 0 auto; 
  position: fixed;
  top: 0;
  bottom: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ImagemLogin;
