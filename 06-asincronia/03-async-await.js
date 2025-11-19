// ESTO NO FUNCIONA EN EL NAVEGADOR, SOLO EN NODE
const fs = require('fs/promises')

const inicio = async () => {

    let contenido = await fs.readFile('06-asincronia/files/1.txt')
    console.log(contenido.toString())
    
    contenido = await fs.readFile('06-asincronia/files/2.txt')
    console.log(contenido.toString())

    contenido = await fs.readFile('06-asincronia/files/3.txt')
    console.log(contenido.toString())

    console.log('Fin')
}

inicio()