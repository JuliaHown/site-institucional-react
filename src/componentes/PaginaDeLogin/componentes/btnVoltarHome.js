import * as React from "react";
import styled from "styled-components";
import VoltarIcon from "../../../assets/icon-back.png";

function VoltarParaHome() {
  return (
    <VoltarParaHomeWrapper href="/">
      <VoltarParaHomeIcon src={VoltarIcon} alt="Ícone de Voltar para o site" />
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
  width: 12px;
  height: 12px;
  object-fit: contain;
`;

const VoltarParaHomeTexto = styled.span`
  font-family: DM Sans, sans-serif;
`;

export default VoltarParaHome;
