console.log(window.screen.height)
console.log(screen.width)

console.log(location)

console.log(history)
// history.back()
// history.forward()

console.log(navigator)

const mostrarPosicion = (posicion) => {
    console.log(posicion)
    console.log(`Te encuentras en latitud: ${posicion.coords.latitude}, longitud: ${posicion.coords.longitude}`)
}

navigator.geolocation.getCurrentPosition(mostrarPosicion)

// navigator.getBattery()

const mostrarTitulo = () => {
    const contenedor = document.createElement('div')

    const titulo = document.createElement('h1')
    titulo.textContent = "Hola mundo"
    
    const texto = document.createTextNode("Hola mundo!!!")
    titulo.appendChild(texto)

    contenedor.appendChild(titulo)

    document.getElementsByTagName('body')[0].appendChild(contenedor)
}

mostrarTitulo()