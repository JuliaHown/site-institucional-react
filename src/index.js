import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

:root {
  --verde-escuro: #294b29;
  --verde-musgo: #50623a;
  --verde-oliva: #789461;
  --verde-pastel: #dbe7c9;
  --preto: #000000;
  --background: #fbfbfb;
  --background-dark: #1e1e1e;
  --card-background: #f8f8ff;
  --card-background-stroke: #c2c2c2;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scrollbar-width: none;

  li {
    list-style: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
