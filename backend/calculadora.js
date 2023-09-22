'use strict'

const params = process.argv.slice(2);  // Capturar parametros de la terminal
const numero1 = parseFloat(params[0]);
const numero2 = parseFloat(params[1]);

const plantilla = `
    La suma es: ${numero1 + numero2}
    La resta es: ${numero1 - numero2}
    La multiplicacion es: ${numero1 * numero2}
    La division es: ${numero1 / numero2}
`;

console.log(plantilla);
