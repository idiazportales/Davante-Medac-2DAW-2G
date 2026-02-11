import { sumar, restar } from "./operaciones.js";

$(document).ready(function () {
  const $num1 = $("#num1");
  const $num2 = $("#num2");
  const $resultado = $("#resultado");

  function getNumeros() {
    const n1 = parseFloat($num1.val()) || 0;
    const n2 = parseFloat($num2.val()) || 0;
    return { n1, n2 };
  }

  $("#sumar").click(function () {
    const { n1, n2 } = getNumeros();
    $resultado.val(sumar(n1, n2));
  });

  $("#restar").click(function () {
    const { n1, n2 } = getNumeros();
    $resultado.val(restar(n1, n2));
  });

  $("#btnMultiplicar").click(function () {
    const { n1, n2 } = getNumeros();
    $resultado.val(multiplicar(n1, n2));
  });

  $("#btnCalcular").click(function () {
    const { n1, n2 } = getNumeros();
    $resultado.val(dividir(n1, n2));
  });

  $("#limpiar").click(function () {
    $num1.val("");
    $num2.val("");
    $resultado.val("");
  });
});
