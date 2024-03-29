import "./SectionOne.css";
import ImgLanding from "../../../assets/Homem.svg"

function SectionOne() {
    return (
        <section className="first-lading-page">
        <div className="left-content">
          <h1 className="titulo">
            O seu parceiro na <br />
            gestão de encomendas
          </h1>
          <span className="texto">
            Oferecemos uma solução tecnológica inovadora para simplificar a
            gestão de encomendas em condomínios, visando proporcionar eficiência
            e comodidade aos moradores.
          </span>
          <button className="btn-saiba-mais">Saiba mais</button>
        </div>
        <div className="container-image">
          <img
            src={ImgLanding}
            alt="Um homem de pele escura com camiseta polo e boné da cor azul escuro, sorrindo com algumas caixas de papelão na mão direita."
            className="img-homem"
          ></img>
        </div>
      </section>
    );
}

export default SectionOne