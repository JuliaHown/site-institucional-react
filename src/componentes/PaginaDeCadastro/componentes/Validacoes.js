export const validarNome = (nome) => {
    return /^[a-zA-Z0-9\s]+$/.test(nome);
  };
  

export const validarCEP = (cep) => {
    return cep.match(/^\d{8}$/);
  };
  
  export const validarNumero = (numero) => {
    return numero.match(/^\d+$/);
  };
  
  export const validarPreenchido = (valor) => {
    return valor.trim() !== "";
  };
  
  export const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };


  export const formatarTelefone = (telefone) => {
    const apenasNumeros = telefone.replace(/[^\d]/g, "");
    let telefoneFormatado = apenasNumeros.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );
    return telefoneFormatado;
  };