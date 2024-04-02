import styled from "styled-components";
import Grow from "../../../../assets/grow.png";
import Check from "../../../../assets/check.png";
import Light from "../../../../assets/lightbulb.png";

const ListaUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListaContent = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-top: 1.5vh;
  margin-right: 13px;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  border: 1px solid #acabab;
  border-radius: 10%;
  padding: 8px;
  width: 50px;
  height: 47px;

  img {
    width: auto;
    height: 30px;
  }
`;

const ContentWrapper = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const listaDasVantagens = [
  "Simplificação da Gestão",
  "Eliminação da Burocracia",
  "Compromisso com a Eficiência e Comodidade",
];

const listaDescricao = [
  "Na Zé Porteiro, simplificamos a gestão de encomendas em condomínios para tornar a experiência fácil e eficiente para todos os envolvidos.",
  "Eliminamos a burocracia condominial, agilizando entregas e simplificando procedimentos através de nosso sistema automatizado.",
  "Garantimos eficiência e comodidade em todas as etapas do processo de entrega, com comunicação ágil e opções flexíveis de retirada.",
];

const icones = [Light, Grow, Check];

function ListaVantagens() {
  return (
    <div>

      <ListaUl>
        {listaDasVantagens.map((vantagem, index) => (
          <ListaContent key={index}>
            <ListItem>
              <IconWrapper>
                <img src={icones[index]} alt="Ícone" />
              </IconWrapper>
              <ContentWrapper>
                <h3>{vantagem}</h3>
                <p>{listaDescricao[index]}</p>
              </ContentWrapper>
            </ListItem>
          </ListaContent>
        ))}
      </ListaUl>

    </div>
  );
}

export default ListaVantagens;
