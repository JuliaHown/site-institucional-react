import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  margin: 3vh;
  align-items: center;
  margin-left: 10vw;
  font-family: 'Montserrat', Arial, Helvetica;;
`;

const CadastrarButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-weight: 700;
  margin-right: 2vw;
  cursor: pointer;
`;

const LoginButton = styled.button`
  background: var(--verde-musgo);
  border: none;
  outline: none;
  color: #fff;
  border-radius: 6px;
  width: 6vw;
  height: 3.5vh;
  font-weight: 500;
  cursor: pointer;
`;

const textoBotoes = ['Cadastrar', 'Fazer Login'];

const Buttons = () => {
  return (
    <ButtonContainer>
      <CadastrarButton>{textoBotoes[0]}</CadastrarButton>
      <LoginButton>{textoBotoes[1]}</LoginButton>
    </ButtonContainer>
  );
};

export default Buttons;
