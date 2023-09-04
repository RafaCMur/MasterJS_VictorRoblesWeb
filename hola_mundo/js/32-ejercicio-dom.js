'use strict'

window.addEventListener('load', () => {


    let formulario = document.querySelector('#formulario')
    let box_dashed = document.querySelector('.dashed')
    box_dashed.style.display = 'none'

    formulario.addEventListener('submit', () => {
        console.log('Evento submit capturado')

        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let edad = document.querySelector('#edad').value

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert('El nombre no es válido')
            document.querySelector('#error_nombre').innerHTML = 'El nombre no es válido'
            return false
        } else {
            document.querySelector('#error_nombre').style.display = 'none'
        }

        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            alert('Los apellidos no son válidos')
            document.querySelector('#error_apellidos').innerHTML = 'Los apellidos no son válidos'
            return false
        } else {
            document.querySelector('#error_apellidos').style.display = 'none'
        }

        if (edad == null || edad <= 0) {
            alert('La edad no es válida')
            document.querySelector('#error_edad').innerHTML = 'La edad no es válida'
            return false
        } else {
            document.querySelector('#error_edad').style.display = 'none'
        }

        box_dashed.style.display = 'block'

        let span_nombre = document.querySelector('#p_nombre span')
        let span_apellidos = document.querySelector('#p_apellidos span')
        let span_edad = document.querySelector('#p_edad span')

        span_nombre.innerHTML = nombre
        span_apellidos.innerHTML = apellidos
        span_edad.innerHTML = edad

        /*
        let datos_usuario = [nombre, apellidos, edad]
        for (let i in datos_usuario) {
            let parrafo = document.createElement('p')
            parrafo.append(datos_usuario[i])
            box_dashed.append(parrafo)
        }
        */
    })
})
