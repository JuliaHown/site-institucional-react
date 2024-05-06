import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import Login from "./componentes/PaginaDeLogin/PaginaLogin";
import SobreNos from "./componentes/PaginaSobreNos/SobreNos";
import Cadastrar from "./componentes/PaginaDeCadastro/PaginaCadastro";
import CadastrarCondominio from "./componentes/PaginaDeCadastro/PaginaCondominio"
import ContrateNos from "./componentes/PaginaContrate/Contrate";
import CadastroEncomendaCliente from "./componentes/TelasDoCliente/CadastroEncomenda/CadastroEncomenda"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/contrate" element={<ContrateNos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/cadastrarcondominio" element={<CadastrarCondominio />} />
        <Route path="/cadastrarencomenda" element={<CadastroEncomendaCliente />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
