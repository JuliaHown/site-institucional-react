import React from "react";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className="App-container">
      <Navbar />
      <div className="App-banner-container">
        <div className="App-bannerImage-container">
          <imgHomem />
        </div>
        <div className="App-text-section">
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
            src="/src/assets/imgMen.png"
            alt="Um homem sorrindo enquanto segura uma caixa de papelão"
            className="imagem-principal"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
