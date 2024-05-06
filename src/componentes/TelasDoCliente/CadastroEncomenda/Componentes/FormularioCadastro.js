import React, { useState } from "react";
import styled from "styled-components";


const InputField = ({ label, placeholder, value, onChange }) => (
  <FieldWrapper>
    <FieldLabel>{label}</FieldLabel>
    <FieldInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </FieldWrapper>
);

const getCurrentDateTime = () => {
  const now = new Date();
  const formattedDate = `${String(now.getDate()).padStart(2, "0")}/${String(
    now.getMonth() + 1
  ).padStart(2, "0")}/${now.getFullYear()} ${String(now.getHours()).padStart(
    2,
    "0"
  )}:${String(now.getMinutes()).padStart(2, "0")}:${String(
    now.getSeconds()
  ).padStart(2, "0")}`;
  return formattedDate;
};


function EncomendaForm() {
  const [dataRecebimento, setDataRecebimento] = useState(getCurrentDateTime());
  const [dataEntrega, setDataEntrega] = useState(getCurrentDateTime());
  const [nomeDestinatario, setNomeDestinatario] = useState("");
  const [blocoDestinatario, setBlocoDestinatario] = useState("");
  const [numeroApartamento, setNumeroApartamento] = useState("");

  return (
    <Container>
      <Content>
        <InputField
          label="Nome do destinatário*"
          placeholder="Digite o nome do morador"
          value={nomeDestinatario}
          onChange={(e) => setNomeDestinatario(e.target.value)}
        />
        <InputField
          label="Bloco do destinatário*"
          placeholder="Digite o bloco do destinatário"
          value={blocoDestinatario}
          onChange={(e) => setBlocoDestinatario(e.target.value)}
        />
        <InputField
          label="Número do apartamento*"
          placeholder="Digite o número do apartamento"
          value={numeroApartamento}
          onChange={(e) => setNumeroApartamento(e.target.value)}
        />
        <InputField
          label="Data de Recebimento"
          placeholder="DD/MM/AAAA HH:MM:SS"
          value={dataRecebimento}
          onChange={(e) => setDataRecebimento(e.target.value)}
        />
        <InputField
          label="Data de entrega ao destinatário"
          placeholder="DD/MM/AAAA HH:MM:SS"
          value={dataEntrega}
          onChange={(e) => setDataEntrega(e.target.value)}
        />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  max-width: 444px;
  flex-direction: column;
  color: #000;
  font-weight: 400;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 20px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;

const FieldLabel = styled.div`
  width: 100%;
  font-size: 18px;
`;

const FieldInput = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 16px 12px;
  font-size: 17px;
`;

export default EncomendaForm;
