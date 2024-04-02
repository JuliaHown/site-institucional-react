import styled from "styled-components";

const Container = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  margin-left: 16%;
  margin-top: 2.8%;
`;

const Links = styled.ul`
  display: flex;
  font-family: "Montserrat", Arial, Helvetica;
  font-weight: 600;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 1.3vh;
  gap: 5vw;
`;

const ListItem = styled.li`
  cursor: pointer;

  &.verde {
    color: #294b29;
  }

  &.preto {
    color: black;
  }
`;

const textosOpcoes = ["Página inicial", "Sobre nós", "Contrate"];

function Navbar() {
  return (
    <Container>
      <Links>
        {textosOpcoes.map((texto, index) => (
          <ListItem className={index === 0 ? "verde" : "preto"} key={index}>
            <p>{texto}</p>
          </ListItem>
        ))}
      </Links>
    </Container>
  );
}

export default Navbar;
