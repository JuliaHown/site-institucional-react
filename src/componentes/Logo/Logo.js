import logotipo from '../../assets/LogoPadrao.svg'
import './Logo.css';

function Logo() {
  return (
    <div className="logo">
      <img src={logotipo} alt="Logo da empresa é um desenho de uma mão segurando uma caixa na cor verde escuro"></img>
    </div>
  );
}

export default Logo
