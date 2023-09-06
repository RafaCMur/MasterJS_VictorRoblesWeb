'use strict'

let fecha = new Date();

let year = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();

let textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}
`;

console.log(textoHora);
console.log(Math.ceil(Math.random()*10000));
