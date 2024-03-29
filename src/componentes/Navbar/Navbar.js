import "./Navbar.css";

const textosOpcoes = ["Página inicial", "Sobre nós", "Contrate"];

function Navbar() {
  return (
    <nav>
      <ul className="opcoes">
        {textosOpcoes.map((texto) => ( 
          <li className="opcao">
            <p>{texto}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
