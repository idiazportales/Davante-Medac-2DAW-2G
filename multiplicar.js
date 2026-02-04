$(document).ready(function () {
    $("#btnMultiplicar").click(function () {
        let n1 = parseFloat($("#num1").val()) || 0;
        let n2 = parseFloat($("#num2").val()) || 0;

        let multiplicacion = n1 * n2;
        $("#resultado").text("Resultado: " + multiplicacion);
    });
});

console.log(multiplicacion(5,6))
