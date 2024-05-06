import React from "react";
import styled from "styled-components";

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
  width: 91px;
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
  return (
    <PageContainer>
      <Sidebar>
        <NomeUsuario>Usuario</NomeUsuario>
        <EmailUsuario>usuario@email.com</EmailUsuario>
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
