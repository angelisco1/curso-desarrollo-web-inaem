// Selectores de CSS
// De etiqueta -> form
// De id -> #nombre
// De clase -> .check
// Checkboxes marcados -> input[type="checkbox"]:checked


const suscripciones = []


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
        num: suscripciones.length + 1,
        fechaSuscripcion: ''
    }
    console.log(suscripcion)

    // Añade la suscripcion al final del array de suscripciones
    suscripciones.push(suscripcion)

    // Añade la suscripcion al principio del array de suscripciones
    // suscripciones.unshift(suscripcion)

    // pintarSuscripcionEnTabla(suscripcion)
    pintarSuscripcionesEnTabla()

})

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

    fila.appendChild(celdaNum)
    fila.appendChild(celdaNombre)
    fila.appendChild(celdaEmail)
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

    const filasSuscripciones = suscripciones.map((suscripcion) => {
        return `<tr>
            <td>${suscripcion.num}</td>
            <td>${suscripcion.nombre}</td>
            <td>${suscripcion.email}</td>
            <td>${suscripcion.tyc ? '✔' : '❌'}</td>
            <td>${suscripcion.publi ? '✔' : '❌'}</td>
            <td>${suscripcion.datos ? '✔' : '❌'}</td>
            <td></td>
        </tr>`
    })
    
    tbody.innerHTML = filasSuscripciones.join('')

    actualizarTotalSuscripciones(suscripciones.length)
}

const actualizarTotalSuscripciones = (total) => {
    const celdaTotal = document.getElementById('totalSuscripciones')
    celdaTotal.textContent = total
}
