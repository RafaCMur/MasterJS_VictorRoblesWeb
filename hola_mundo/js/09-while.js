'use strict'

// Bucle while

var year = 2018;

while(year <= 2051){
    // Ejecuta esto
    console.log("Estamos en el año: "+year);

    if(year == 2030){
        break;
    }
    year++;
}

// Do while

var years = 30;

do{
    alert("Solo cuando sea > 25. Years: " + years);
    years--;
}while(years > 25)
