// ESTO NO FUNCIONA EN EL NAVEGADOR, SOLO EN NODE
const fs = require('fs/promises')

const promesa1 = fs.readFile('06-asincronia/files/1.txt')
const promesa2 = fs.readFile('06-asincronia/files/2.txt')
const promesa3 = fs.readFile('06-asincronia/files/3.txt')

promesa1
    .then((contenido) => {
        console.log(contenido.toString())
        return promesa2
    })
    .then((contenido) => {
        console.log(contenido.toString())
        return promesa3
    })
    .then((contenido) => {
        console.log(contenido.toString())
    })
    .catch((err) => {
        console.log('Error: ', err)
    })
    .finally(() => {
        console.log('FIN')
    })




