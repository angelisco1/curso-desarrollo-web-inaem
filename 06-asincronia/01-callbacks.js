// ESTO NO FUNCIONA EN EL NAVEGADOR, SOLO EN NODE
const fs = require('fs')

fs.readFile('06-asincronia/files/1.txt', (err, contenido) => {
    // console.log(err)
    console.log(contenido.toString())

    fs.readFile('06-asincronia/files/2.txt', (err, contenido) => {
        console.log(contenido.toString())

        fs.readFile('06-asincronia/files/3.txt', (err, contenido) => {
            console.log(contenido.toString())

            console.log('FIN')
        })
    })
})


