'use strict'

const div_usuarios = document.querySelector('#usuarios')
const div_janet = document.querySelector('#janet')
const div_profesor = document.querySelector('#profesor')

//Fetch (sustituira a AJAX) y peticiones a servicios / apis rest
// API
// BD
getUsuarios()
    .then(data => data.json()) //Convertimos la respuesta a JSON
    .then(users => { //Recogemos el JSON
        listadoUsuarios(users.data)
        return getInfo()
    })
    .then(data => {
        div_profesor.innerHTML = data
        return getJanet()
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data)
    })
    .catch(error => {
        alert('Error en las peticiones')
    })





async function getUsuarios() {
    return fetch('https://reqres.in/api/users')
}

//======= Async Await =======

async function x () {
    
    const usuarios = await (await getUsuarios()).json()
    console.log(usuarios)

    const mesas = 'mesas'


    const loquesea = await (await getJanet()).json();
}

await x()



function getJanet() {
    return fetch('https://reqres.in/api/users/2')
}

function getInfo() {

    let profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    }

    return new Promise((resolve, reject) => {

        let profesor_string = ''

        setTimeout(() => {
            profesor_string = JSON.stringify(profesor)
            if (typeof profesor_string!== 'string' || profesor_string === '') return reject('error UNO')
            return resolve(profesor_string)
        }, 3000)
    })
}

function listadoUsuarios(usuarios) {
    //Recorremos el array de usuarios
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3')
        nombre.innerHTML = i + '. ' + user.first_name + ' ' + user.last_name
        div_usuarios.appendChild(nombre)
        document.querySelector('.loading').style.display = 'none'
    })
}

function mostrarJanet(user) {
    console.log(user)
    let nombre = document.createElement('h3')
    let avatar = document.createElement('img')
    avatar.src = user.avatar
    avatar.width = '150'

    nombre.innerHTML = user.first_name + ' ' + user.last_name
    div_janet.appendChild(nombre)
    div_janet.appendChild(avatar)

    document.querySelector('#janet .loading').style.display = 'none'
}
