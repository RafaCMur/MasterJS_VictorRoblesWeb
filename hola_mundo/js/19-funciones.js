'use strict'

//Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function porConsola(num1, num2) {
    console.log('Suma: ' + (num1 + num2));
    console.log('Resta: ' + (num1 - num2));
    console.log('Multiplicación: ' + (num1 * num2));
    console.log('División: ' + (num1 / num2));
    console.log('************************************')
}

function porPantalla(num1, num2) {
    document.write('Suma: ' + (num1 + num2) + '<br/>');
    document.write('Resta: ' + (num1 - num2) + '<br/>');
    document.write('Multiplicación' + (num1 * num2) + '<br/>');
    document.write('División: ' + (num1 / num2) + '<br/>');
    document.write('************************************' + '<br/>');
}


function calculadora(num1, num2, mostrar = false) {
    // Conjunto de instrucciones a ejecutar
    if (mostrar == false) {
        porConsola(num1, num2);
    } else {
        porPantalla(num1, num2);
    }
    return "Hola soy la calculadora";
}

// Invocar o llamar a la función
calculadora(12, 8);

// for(var i = 1; i <= 10; i++){
//     console.log(i);
//     calculadora(i, 8);
// }
