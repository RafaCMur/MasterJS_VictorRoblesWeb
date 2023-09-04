'use strict'

// Eventos del ratón

window.addEventListener('load', () => {
    function cambiarColor(){
        let bg = boton.style.background
        if(bg == "green"){
            boton.style.background = "red"
        } else {
            boton.style.background = 'green'
        }
        boton.style.padding = '10px'
        boton.style.border = '1px solid #ccc'
        return true
    }
    
    var boton = document.querySelector('#boton')
    
    boton.addEventListener('click', function(){  //THIS SOLO FUNCIONA CON FUNCTION() Y NO CON ARROW FUNCTION
        cambiarColor()
        console.log(this)
        this.style.border = '10px solid black'
    })
    
    // Mouse over
    boton.addEventListener('mouseover', () => boton.style.background = '#ccc')
    
    //Mouseout
    boton.addEventListener('mouseout', () => boton.style.background = 'black')
    
    
    // Focus
    let input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', () => console.log("[focus] Estas dentro del input"))
    
    // Blur
    input.addEventListener('blur', () => console.log("[blur] Estas fuera del input"))
    
    // Keydown - Se ejecuta cuando pulsamos una tecla
    input.addEventListener('keydown', (event) => console.log("[keydown] Pulsando esta tecla", String.fromCharCode(event.keyCode)))
    
    // Keypress - Se ejecuta cuando pulsamos una tecla.
    input.addEventListener('keypress', (event) => console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode)))
    
    // La diferencia entre keydown y keypress es que keypress no detecta las teclas especiales como F1, F2, F3, etc.
    
    // Keyup - Se ejecuta cuando soltamos una tecla.
    input.addEventListener('keyup', (event) => console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode)))
    
})
