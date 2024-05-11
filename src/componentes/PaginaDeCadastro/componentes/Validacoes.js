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
  