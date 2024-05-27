import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import Login from "./componentes/PaginaDeLogin/PaginaLogin";
import SobreNos from "./componentes/PaginaSobreNos/SobreNos";
import Cadastrar from "./componentes/PaginaDeCadastro/PaginaCadastro";
import CadastrarCondominio from "./componentes/PaginaDeCadastro/PaginaCondominio"
import ContrateNos from "./componentes/PaginaContrate/Contrate";
import CadastroEncomendaCliente from "./componentes/TelasDoCliente/CadastroEncomenda/CadastroEncomenda"
import PaginaInicial from "./componentes/TelasDoCliente/PaginaInicial/PaginaInicial"
import Estoque from "./componentes/TelasDoCliente/Estoque/Estoque"
import Apartamentos from "./componentes/TelasDoCliente/Apartamentos/Apartamento";
import Porteiro from "./componentes/TelasDoCliente/Porteiro/Porteiro"


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
        <Route path="/pagina-inicial" element={<PaginaInicial />} />
        <Route path="/cadastrar-encomenda" element={<CadastroEncomendaCliente />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/apartamentos" element={<Apartamentos />} />
        <Route path="/porteiros" element={<Porteiro />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
