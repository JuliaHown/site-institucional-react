import styled from "styled-components";
import imagemFaleConosco from "../../../assets/Homem(2).svg";

const Container = styled.div`
  margin-top: 6vh;
  justify-content: center;
  display: flex;
  height: 700px;
  gap: 5vw;
`;

const FormularioContainer = styled.div`
  background-color: #789461;
  width: 50%;
  width: 80vw;
  height: 70vh;
  padding: 6vw;
  border-radius: 40px 40px 0 0;

  h1 {
    font-family: Montserrat, arial, sans-serif;
    text-align: left;
    color: #ffffff;
    font-weight: 800;
    font-size: 3rem;
    margin-top: 1vh;
    margin-bottom: 1.6vh;
  }

  span {
    color: #ffffff;
    font-weight: 200;
  }
`;

const ImagemForms = styled.div`
  width: 50%;
  display: flex;

  img {
    width: auto;
    height: 650px;
    margin-top: -38vh;
  }
`;

function FaleConosco() {
  return (
    <Container>
      <FormularioContainer>
        <h1>Fale conosco</h1>
        <span>
          Para sugestões, dúvidas ou solicitações, entre em contato <br />
          conosco através do formulário abaixo.{" "}
        </span>
        <ImagemForms>
          <img src={imagemFaleConosco} alt="" />
        </ImagemForms>
      </FormularioContainer>
    </Container>
  );
}

export default FaleConosco;
