// operaciones.js
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (isNaN(a) || isNaN(b) || b === 0) {
    return "No válido.";
  }
  const operacion = a / b;
  return Number.isInteger(operacion)
    ? operacion
    : parseFloat(operacion.toFixed(8));
}
