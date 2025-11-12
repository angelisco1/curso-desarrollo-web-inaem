// console.log(Math.random())
// console.log(Math.random()*51)
// console.log(Math.floor(Math.random()*51))

// Math.floor(Math.random()*51)

let volverAJugar = true

do {
    const numeroInicial = Math.floor(Math.random()*51)
    console.log("Numero inicial: ", numeroInicial)

    let numIntentos = 0, numeroDelUsuario = -1;

    do {
        numeroDelUsuario = Number(prompt("Introduce el número:"))
        if (numeroDelUsuario > numeroInicial) {
            alert('El número introducido es mayor que el buscado')
        } else if (numeroDelUsuario < numeroInicial) {
            alert('El número introducido es menor que el buscado')
        }
        numIntentos++
    } while(numeroDelUsuario !== numeroInicial)

    volverAJugar = confirm(`Has acertado. El número era el ${numeroInicial}. Has tardado ${numIntentos} turnos. ¿Quieres volver a jugar?`)
} while(volverAJugar)
