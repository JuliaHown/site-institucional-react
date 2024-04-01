import "./Navbar.css";
import '../../style';

const textosOpcoes = ["Página inicial", "Sobre nós", "Contrate"];

function Navbar() {
  return (
    <nav>
      <ul className="opcoes">
      {textosOpcoes.map((texto, index) => ( 
          <li className={`opcao ${index === 0 ? 'verde' : 'preto'}`}>
            <p>{texto}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
