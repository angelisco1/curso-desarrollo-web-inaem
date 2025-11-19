// Selectores de CSS
// De etiqueta -> form
// De id -> #nombre
// De clase -> .check
// Checkboxes marcados -> input[type="checkbox"]:checked

const suscripcionesKey = "suscripciones"

const pintarSuscripcionEnTabla = (suscripcion) => {
    const tbody = document.querySelector('table > tbody')
    const fila = document.createElement('tr')

    const celdaNum = document.createElement('td')
    celdaNum.textContent = suscripcion.num

    const celdaNombre = document.createElement('td')
    celdaNombre.textContent = suscripcion.nombre

    const celdaEmail = document.createElement('td')
    celdaEmail.textContent = suscripcion.email

    const celdaTyC = document.createElement('td')
    celdaTyC.textContent = suscripcion.tyc ? '✔' : '❌'
    
    const celdaPubli = document.createElement('td')
    celdaPubli.textContent = suscripcion.publi ? '✔' : '❌'
    
    const celdaDatos = document.createElement('td')
    celdaDatos.textContent = suscripcion.datos ? '✔' : '❌'

    const fechaSuscripcion = new Date(suscripcion.fechaSuscripcion)
    const celdaFecha = document.createElement('td')
    celdaFecha.textContent = fechaSuscripcion.toLocaleString()

    fila.appendChild(celdaNum)
    fila.appendChild(celdaNombre)
    fila.appendChild(celdaEmail)
    fila.appendChild(celdaFecha)
    fila.appendChild(celdaTyC)
    fila.appendChild(celdaPubli)
    fila.appendChild(celdaDatos)

    tbody.appendChild(fila)

    // const celdaTotal = document.getElementById('totalSuscripciones')
    // celdaTotal.textContent = suscripcion.num
    actualizarTotalSuscripciones(suscripcion.num)
}

const pintarSuscripcionesEnTabla = () => {
    const tbody = document.querySelector('table > tbody')

    const filasSuscripciones = suscripciones.map((suscripcion, index) => {
        const fechaSuscripcion = new Date(suscripcion.fechaSuscripcion)
        
        return `<tr>
            <td>${index + 1}</td>
            <td>${suscripcion.num}</td>
            <td>${suscripcion.nombre}</td>
            <td>${suscripcion.email}</td>
            <td>${fechaSuscripcion.toLocaleString()}</td>
            <td>${suscripcion.tyc ? '✔' : '❌'}</td>
            <td>${suscripcion.publi ? '✔' : '❌'}</td>
            <td>${suscripcion.datos ? '✔' : '❌'}</td>
            <td><button type="button" class="btnDelete" data-id="${suscripcion.num}">🧺</button></td>
        </tr>`
    })
    
    tbody.innerHTML = filasSuscripciones.join('')

    addListenersBotonesEliminar()

    actualizarTotalSuscripciones(suscripciones.length)
}

const actualizarTotalSuscripciones = (total) => {
    const celdaTotal = document.getElementById('totalSuscripciones')
    celdaTotal.textContent = total
}

const anyadirSuscripcion = (suscripcion) => {
    // let suscripcionesEnStorage = localStorage.getItem(suscripcionesKey)
    // if (!suscripcionesEnStorage) {
    //     suscripcionesEnStorage = []
    // } else {
    //     suscripcionesEnStorage = JSON.parse(suscripcionesEnStorage)
    // }
    const suscripcionesEnStorage = getSuscripciones()

    suscripcionesEnStorage.push(suscripcion)
    localStorage.setItem(suscripcionesKey, JSON.stringify(suscripcionesEnStorage))

    return suscripcionesEnStorage
}

const getSuscripciones = () => {
    let suscripcionesEnStorage = localStorage.getItem(suscripcionesKey)
    if (!suscripcionesEnStorage) {
        suscripcionesEnStorage = []
    } else {
        suscripcionesEnStorage = JSON.parse(suscripcionesEnStorage)
    }
    return suscripcionesEnStorage
}

const eliminarSuscripcion = (posicion) => {
    let listaSuscripciones = getSuscripciones()
    console.log(posicion)
    // Quitamos el elemento de la lista que se encuentra en la posición dada
    // listaSuscripciones.splice(posicion, 1)
    listaSuscripciones = listaSuscripciones.filter((suscripcion) => {
        return suscripcion.num !== posicion
    })

    localStorage.setItem(suscripcionesKey, JSON.stringify(listaSuscripciones))
    console.log(listaSuscripciones)

    // Quitar la fila de la suscripción eliminada
    const filaAEliminar = document.querySelector(`button[data-id="${posicion}"]`).parentNode.parentNode

    document.querySelector('table > tbody').removeChild(filaAEliminar)

    actualizarTotalSuscripciones(listaSuscripciones.length)

    return listaSuscripciones
}

const addListenersBotonesEliminar = () => {

    const botonesEliminar = document.querySelectorAll('.btnDelete')

    botonesEliminar.forEach((btn) => {
        btn.addEventListener('click', () => {
            // console.log(btn.dataset.id)
            // console.log(btn.getAttribute('data-id'))
            const posicionSuscripcion = btn.dataset.id
            suscripciones = eliminarSuscripcion(posicionSuscripcion)
            
            pintarSuscripcionesEnTabla()
        })
    })

}

// const suscripciones = []
let suscripciones = getSuscripciones()
pintarSuscripcionesEnTabla()


const formulario = document.querySelector('form')
console.log(formulario)

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    // console.log(event)
    console.log('Se ha enviado el formulario')
    console.log(event.target.elements)

    const campos = event.target.elements

    const email = campos.email.value
    const nombre = campos.nombre.value
    const publi = campos.publi.checked
    const tyc = campos.tyc.checked
    const datos = campos.datos.checked

    const suscripcion = {
        email: email,
        nombre: nombre,
        publi: publi,
        tyc: tyc,
        datos: datos,
        num: uuidv4(),
        fechaSuscripcion: Date.now()
    }
    console.log(suscripcion)

    // Añade la suscripcion al final del array de suscripciones
    // suscripciones.push(suscripcion)
    suscripciones = anyadirSuscripcion(suscripcion)

    // Añade la suscripcion al principio del array de suscripciones
    // suscripciones.unshift(suscripcion)

    // pintarSuscripcionEnTabla(suscripcion)
    pintarSuscripcionesEnTabla()

    // Reseteamos el formulario
    formulario.reset()
})





