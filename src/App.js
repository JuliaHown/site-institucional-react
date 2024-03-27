import "./App.css";
import Logo from "./componentes/Logo/Logo";
import Navigation from "./componentes/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <Navigation></Navigation>
        <div className="btn-user">
        <button className="btn-Cadastrar">Cadastrar</button>
        <button className="btn-Login">Fazer Login</button>
        </div>
      </header>
    </div>
  );
}

export default App;
