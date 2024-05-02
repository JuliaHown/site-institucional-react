import React from "react";
import styled from "styled-components";

import ImagemDestaque from "../../../assets/Casal.svg";

function Imagem() {
    return (
        <Container>
            <Image src={ImagemDestaque} alt="Imagem de um casal sorrindo enquanto olha pra tela de um notebook. A mulher está sentada no sofá com vestes amarelas, e o homem apoiado no sofá com vestes brancas." />
        </Container>
    )
}

const Container = styled.div`
  width: 70%;
  margin-top: 6vh;
`;

const Image = styled.img`
  object-fit: cover;
  height: auto;
  width: 100%;
`;

export default Imagem;