import styled from "styled-components";

function PaginaCadastrar() {
    return (
        <Container>
            <TextosContainer>
                <Titulo>
                    <h1>Página de Cadastro</h1>
                </Titulo>
            </TextosContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TextosContainer = styled.div`
  text-align: center;
`;

const Titulo = styled.div`
  h1 {
    color: #183c18;
    font-size: 36px;
    font-weight: 700;
  }
`;

export default PaginaCadastrar;
