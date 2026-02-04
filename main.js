$(document).ready(function () {
  // Función para el botón C (limpiar)
  $("#limpiar").click(function () {
    $("#num1").val("");
    $("#num2").val("");
    $("#resultado").val("");
    // Por si alguno usó .text() en lugar de .val()
    $("#resultado").text("Resultado: ");
  });
});
