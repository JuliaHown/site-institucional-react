import React from 'react';
import styled from 'styled-components';

const Botao = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #203c20;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: ${props => (props.mostrar ? 'flex' : 'none')};

  &:hover {
    background-color: #142514;
  }
`;

const SetaParaCima = styled.svg`
  width: 24px;
  height: 24px;
  stroke: white;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const BotaoScroll = ({ mostrar, aoClicar }) => {
  return (
    <Botao mostrar={mostrar} onClick={aoClicar}>
      <SetaParaCima xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </SetaParaCima>
    </Botao>
  );
};

export default BotaoScroll;