import styled from "styled-components";
import Style from "../../TelasDoCliente/ClientStyle";
import MenuLateral from "./Componentes/Sidebar";
import Navigation from "./Componentes/Navigation"

const CampoInput = ({ label, placeholder }) => (
  <div>
    <Label>{label}</Label>
    <Input placeholder={placeholder} />
  </div>
);

const Botao = ({ children }) => <BotaoEstilizado>{children}</BotaoEstilizado>;

const SecaoInformacao = ({ titulo, texto, textoBotao }) => (
  <ContainerInfo>
    <TituloInfo>{titulo}</TituloInfo>
    <TextoInfo>{texto}</TextoInfo>
    <Botao>{textoBotao}</Botao>
  </ContainerInfo>
);

const CadastroEncomendas = () => {
  return (
    <>
      <Style />
      <Container>
        <MenuLateral />
        <Content>
          <Esquerda>
            <Titulo>Cadastrar Encomendas</Titulo>
            <CampoInput
              label="Nome do destinatário*"
              placeholder="Digite o nome do morador"
            />
            <CampoInput
              label="Bloco do destinatário*"
              placeholder="Digite o bloco do destinatário"
            />
            <CampoInput
              label="Número do apartamento*"
              placeholder="Digite o número do apartamento"
            />
            <CampoInput
              label="Data de Recebimento"
              placeholder="24/04/2024 18:54:23"
            />
            <CampoInput
              label="Data de entrega ao destinatário"
              placeholder="25/04/2024 14:08:57"
            />
            <Botao>Cadastrar a encomenda</Botao>
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


const Esquerda = styled.div`
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

export default CadastroEncomendas;
