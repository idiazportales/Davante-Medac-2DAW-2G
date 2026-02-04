$(document).ready(function () {

    $('#sumar').click(function () {
        let num1 = parseFloat($('#num1').val()) || 0
        let num2 = parseFloat($('#num2').val()) || 0

        let resultado = num1 + num2
        $('#resultado').val(resultado)
    })

})
