$(document).ready(function(){
    $('#btnCalcular').on('click', function(){
        const dividendo = $('#num1').val();
        const divisor = $('#num2').val();

        const num1 = parseFloat(dividendo);
        const num2 = parseFloat(divisor);

        let resultadoFinal;

        if(isNaN(num1) || isNaN(num2)) {
            resultadoFinal = "No válido.";
        } else if(num2 === 0) {
            resultadoFinal = "No válido.";
        } else {
            const operacion = num1 / num2;
            resultadoFinal = Number.isInteger(operacion) ? operacion : parseFloat(operacion.toFixed(8));
        }

        $('#resultado').text("Resultado: " + resultadoFinal);
    });
});