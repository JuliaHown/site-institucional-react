import * as React from "react";
import styled from "styled-components";

function VoltarParaHome() {
  return (
    <VoltarParaHomeWrapper href="/">
      <VoltarParaHomeIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/535c204736268acf29c76b8db1a0122ffbcb8b208c33add60691586105df7ee5?apiKey=47f1cd04243243c1a2a2819ee899bf9a&" alt="Ícone de Voltar para o site" />
      <VoltarParaHomeTexto>Voltar para o site</VoltarParaHomeTexto>
    </VoltarParaHomeWrapper>
  );
}

const VoltarParaHomeWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  color: var(--text-color, #6d7283);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  line-height: 214%;
  text-decoration: none;
`;

const VoltarParaHomeIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const VoltarParaHomeTexto = styled.span`
  font-family: DM Sans, sans-serif;
`;

export default VoltarParaHome;
