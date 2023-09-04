'use strict'

window.addEventListener('load', () => {

    // Timers
    // setInterval - Se ejecuta cada cierto tiempo
    // setTimeout - Se ejecuta una sola vez

    function intervalo() {
        let tiempo = setInterval(() => {
            console.log("Set interval ejecutado");
            let encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        }, 1000);
        return tiempo;
    }

    let tiempo = intervalo();

    let stop = document.querySelector("#stop");
    stop.addEventListener('click', () => {
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    let start = document.querySelector("#start");
    start.addEventListener('click', () => {
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });

});