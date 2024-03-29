import "./Vantagens.css";
import Lista from "./ListaVantagens/ListaVantagens";
import Colagem from "../../../assets/ColagemFotos.svg";

function Vantagens() {
  return (
      <div className="container">
        <div className="textos">
        <h1 className="titulo">
          Por que escolher os <br /> nossos serviços?
        </h1>
        <span className="texto">
          Na Zé Porteiro, simplificamos a gestão de encomendas em condomínios,
          eliminando burocracias e priorizando eficiência e comodidade. Com
          processos simplificados e comunicação ágil, redefinimos a forma como
          os condomínios lidam com entregas.
        </span>
        <div className="lista">
            <Lista></Lista>
        </div>
        </div>
        <div className="imagem">
          <img src={Colagem} alt="Uma colagem com 3 fotos de pessoas diferentes recebendo encomendas" />
        </div>
      </div>
      
  );
}

export default Vantagens;
