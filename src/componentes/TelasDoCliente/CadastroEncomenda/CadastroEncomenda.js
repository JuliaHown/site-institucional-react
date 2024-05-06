import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Style from "../../TelasDoCliente/ClientStyle";
import MenuLateral from "./Componentes/Sidebar";

const CampoInput = ({ label, placeholder, value, onChange }) => (
  <div>
    <Label>{label}</Label>
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const Botao = ({ children, onClick }) => (
  <BotaoEstilizado onClick={onClick}>{children}</BotaoEstilizado>
);

const SecaoInformacao = ({ titulo, texto, textoBotao }) => (
  <ContainerInfo>
    <TituloInfo>{titulo}</TituloInfo>
    <TextoInfo>{texto}</TextoInfo>
    <Botao>{textoBotao}</Botao>
  </ContainerInfo>
);

const CadastroEncomendas = () => {
  const [nomeDestinatario, setNomeDestinatario] = useState("");
  const [blocoDestinatario, setBlocoDestinatario] = useState("");
  const [numeroApartamento, setNumeroApartamento] = useState("");
  const [dataRecebimento, setDataRecebimento] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Atualizar data e hora de recebimento automaticamente
    const currentDate = new Date();
    setDataRecebimento(formatDate(currentDate));
    
    // Atualizar data e hora de entrega automaticamente
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setDataEntrega(formatDate(nextDay));
  }, []);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  // Fazer requisição //

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/entregas", {
        nomeDestinatario,
        blocoDestinatario,
        numeroApartamento,
        dataRecebimento,
        dataEntrega,
      });

      if (response.status === 201) {
        alert("Encomenda cadastrada com sucesso!");
        setNomeDestinatario("");
        setBlocoDestinatario("");
        setNumeroApartamento("");
        setDataRecebimento("");
        setDataEntrega("");
      }
    } catch (error) {
      setError("Erro ao cadastrar encomenda. Por favor, tente novamente.");
      console.error("Erro ao cadastrar encomenda:", error);
      alert("Erro ao cadastrar encomenda. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <Style />
      <Container>
        <MenuLateral />
        <Content>
          <Esquerda onSubmit={handleSubmit}>
            <Titulo>Cadastrar Encomendas</Titulo>
            <CampoInput
              label="Nome do destinatário*"
              placeholder="Digite o nome do morador"
              value={nomeDestinatario}
              onChange={(e) => setNomeDestinatario(e.target.value)}
            />
            <CampoInput
              label="Bloco do destinatário"
              placeholder="Digite o bloco do destinatário"
              value={blocoDestinatario}
              onChange={(e) => setBlocoDestinatario(e.target.value)}
            />
            <CampoInput
              label="Número do apartamento*"
              placeholder="Digite o número do apartamento"
              value={numeroApartamento}
              onChange={(e) => setNumeroApartamento(e.target.value)}
            />
            <CampoInput
              label="Data de Recebimento*"
              placeholder="DD/MM/AAAA HH:MM:SS"
              value={dataRecebimento}
              onChange={(e) => setDataRecebimento(e.target.value)}
            />
            <CampoInput
              label="Data de entrega ao destinatário"
              placeholder="DD/MM/AAAA HH:MM:SS"
              value={dataEntrega}
              onChange={(e) => setDataEntrega(e.target.value)}
            />
            <Botao>Cadastrar a encomenda</Botao>
            {error && <MensagemErro>{error}</MensagemErro>}
          </Esquerda>
          <Divider />
          <Direita>
            <SecaoInformacao
              titulo="Ou se preferir, utilize nossa nova funcionalidade de cadastrar encomendas usando IA!"
              texto="Usando o seu celular, scaneie as informações da encomendas e pronto, a IA irá cadastrar os dados do destinatário automáticamente. Fácil e rápido para automatizar a sua rotina."
              textoBotao="Cadastrar com IA"
            />
          </Direita>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinhar itens no topo */
  height: 100vh;
`;

const Content = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 90px 80px;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-right: 4.5vw;
  margin-left: 6vw;
`;

const Esquerda = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const Direita = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const Titulo = styled.div`
  color: var(--dark-green, #294b29);
  letter-spacing: 0.18px;
  font: 600 28px/36px Inter, sans-serif;
  white-space: nowrap;
  margin-bottom: 3vh;
`;

const Label = styled.div`
  font: 13px Inter, sans-serif;
  margin-bottom: 0.5vh;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 1);
  font-size: 12px;
  padding: 12px;
  width: 80%;
`;

const BotaoEstilizado = styled.button`
  border-radius: 8px;
  background-color: #477240;
  color: var(--Cinza-100, #f5f5f5);
  padding: 12px 16px;
  font: 600 16px Kanit, sans-serif;
  width: 60%;
  margin-top: 3vh;
  margin-left: 2vw;
  cursor: pointer;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TituloInfo = styled.div`
  color: #183c18;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 2.5vw;
`;

const TextoInfo = styled.div`
  color: #000;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #000000;
  margin: 0 10px;
`;

const MensagemErro = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export default CadastroEncomendas;
