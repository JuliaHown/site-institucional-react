const textoBotoes = ['Cadastrar', 'Fazer Login'];

function Buttons() {
  return (
    <button className="botoes">
      {textoBotoes.map((texto, index) => (
        <span key={index}>
          {texto}
          {index !== textoBotoes.length - 1 && <span className="separator"> | </span>}
        </span>
      ))}
    </button>
  );
}
