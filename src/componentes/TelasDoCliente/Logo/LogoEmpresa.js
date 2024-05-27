import * as React from "react";
import styled from "styled-components";

function LogoEmpresa() {
  return (
    <Container>
      <Imagem
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b09fb26362bb483ac7c946101c2a5048bce58bc2c9ffc0a734061d391d34375?apiKey=47f1cd04243243c1a2a2819ee899bf9a&"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 158px;
  flex-direction: column;
`;

const Imagem = styled.img`
  object-position: center;
  width: 80%;
`;

export default LogoEmpresa;
