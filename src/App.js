import "./App.css";
import Logo from "./componentes/Logo/Logo";
import Navigation from "./componentes/Navbar/Navbar";
import SectionUmLanding from "./componentes/LandingPage/Section1/SectionOne"
import SectionDois from "./componentes/LandingPage/Section2/SectionTwo"


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
      
      <SectionUmLanding></SectionUmLanding>
      <SectionDois></SectionDois>

    </div>
  );
}

export default App;
