import React from "react";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <imgHomem />
        </div>
        <div className="home-text-section">
          <h1 className="primary-reading">
            O seu parceiro na <br />
            gestão de encomendas
          </h1>
          <p className="primary-text">
            Oferecemos uma solução tecnológica inovadora para simplificar a
            gestão de encomendas em condomínios, visando proporcionar eficiência
            e comodidade aos moradores.
          </p>
          <button className="primary-button">Saiba mais</button>
          <ImageComponent
            src="../../public/assets/imgMen.png"
            alt="Um homem sorrindo enquanto segura uma caixa de papelão"
            className="imagem-principal"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
