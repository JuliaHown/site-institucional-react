import "./ListaVantagens.css";
import Grow from "../../../../assets/grow.png";
import Check from "../../../../assets/check.png";
import Light from "../../../../assets/lightbulb.png";

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
      <ul>
        {listaDasVantagens.map((vantagem, index) => (
          <li key={index}>
          <div className="icon-wrapper">
            <img src={icones[index]} alt="Ícone" /> 
          </div>
          <div className="content-wrapper">
            <h3>{vantagem}</h3>
            <p>{listaDescricao[index]}</p>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaVantagens;
