/*
 *     Autor   :   Erick Cruz
 *     Correo  :   mail22master@gmail.com
 *     Blog    :
 *     Github  :
 *     Fecha   :   08-06-2017, 03:53:08 PM
 */

jQuery(document).ready(function ($) {

    var element = $("#demoAnimation");
    var element2 = $("#demoAnimation2");

    /*
    // En este ejemplo de sintaxis se desencadena con "click"
    $(".element").on("click", function () {
        // Sintaxis básica del animate
            $(".element").animate({
                Propiedad1: valor,
                Propiedad2: valor
            }, tiempo_en_Milisegundos,
            function () {
                //Se puede ejecutar una funcion callback al final. Esto es opcional
                alert("Ejemplo");
            });
        // Fin del ejemplo de sintaxis
    });
    */

    element.on("click", function () {
        element.animate({
            left: 150//propiedad:valor (dezplazamiento a la derecha de 150px)
        }, 1000, //tiempo expresado en milisegundos
        function () {//funcion callback, es opcional
            element.animate({
                top: 150//moverse 150px del top hacia abajo
            }, 1000);//tiempo expesado en milisegundos
        });
    });

    element2.on("click", function () {
        element2.animate({
            left: 150,
            top: 300,
            height: 300,
            width: 300
        }, 2000);
    });

});