$(document).ready(() =>{

    $("#restar").click(() =>{

        let num1 = parseFloat($('#num1').val()) || 0;
        let num2 = parseFloat($('#num2').val()) || 0;

        const resultado = num1-num2;
        $('#resultado').val(resultado);
    });
})