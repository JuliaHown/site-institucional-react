export const validarNumero = (valor) => {
  return /^\d*$/.test(valor); // Retorna true se o valor contiver apenas números
};

export const validarAlfabeto = (valor) => {
  return /^[a-zA-Z\s]*$/.test(valor); // Retorna true se o valor contiver apenas letras e espaços
};

export const validarEmail = (valor) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor); // Retorna true se o valor for um email válido
};

export const validarBloco = (valor) => {
  return /^[a-zA-Z0-9]*$/.test(valor); // Retorna true se o valor contiver apenas letras e números
};

export const validarCelular = (valor) => {
  return /^\d{0,11}$/.test(valor); // Retorna true se o valor contiver apenas números e tiver no máximo 11 dígitos
};

export const validarFixo = (valor) => {
  return /^\d{0,10}$/.test(valor); // Retorna true se o valor contiver apenas números e tiver no máximo 10 dígitos
};
