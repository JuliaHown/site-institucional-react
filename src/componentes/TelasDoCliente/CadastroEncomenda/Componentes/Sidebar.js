import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Logo from "../../../../assets/LogoPadrao.svg"

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  padding: 20px;
  width: 200px;
  margin-left: 6vw;
`;

const Imagem = styled.img`
  width: 160px;
`;

const NomeUsuario = styled.div`
  margin-top: 17px;
  font: 800 28px/109% Montserrat, sans-serif;
`;

const EmailUsuario = styled.div`
  margin-top: 4px;
  font: 13px/169% Open Sans, sans-serif;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  font-weight: 600;
`;

const Link = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 10px;
  font-size: 20px;
  line-height: 40px;
  cursor: pointer;
`;

function MenuUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("sua-url-aqui")
      .then(response => {
        setNome(response.data.nome);
        setEmail(response.data.email);
      })
      .catch(error => {
        console.error("Erro ao buscar usuário:", error);
      });
  }, []);

  return (
    <PageContainer>
      <Sidebar>
        <Imagem
          src={Logo}
          alt="Logo da empresa Zé Porteiro"
        />
        <NomeUsuario>{nome}</NomeUsuario>
        <EmailUsuario>{email}</EmailUsuario>
        <Links>
          <Link onClick={() => window.location.href = '/pagina-inicial'}>
            Página Inicial
          </Link>
          <Link onClick={() => window.location.href = '/cadastrar-encomendas'}>
            Cadastrar Encomendas
          </Link>
          <Link onClick={() => window.location.href = '/estoque'}>
            Estoque
          </Link>
          <Link onClick={() => window.location.href = '/apartamentos'}>
            Apartamentos
          </Link>
          <Link onClick={() => window.location.href = '/porteiros'}>
            Porteiros
          </Link>
          <Link onClick={() => window.location.href = '/login'}>
            SAIR
          </Link>
        </Links>
      </Sidebar>
    </PageContainer>
  );
}

export default MenuUsuario;
