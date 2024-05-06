import React from "react";
import styled from "styled-components";


const Button = styled.div`
  justify-content: center;
  border-radius: 10px;
  background-color: #477240;
  color: var(--Cinza-100, #f5f5f5);
  padding: 7px 22px;
  font: 600 24px Kanit, sans-serif;
`;

function CadastrarEncomendaButton({ text }) {
  return <Button>{text}</Button>;
}

export default CadastrarEncomendaButton;
