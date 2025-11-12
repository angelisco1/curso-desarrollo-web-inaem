// function <nombreFn>(<param1>, <param2>, ...<paramN>) {
//     <codigo de la funcion>
// }

function saludar(nombre = 'Charly') {
    console.log(`Hola ${nombre}`)
}

// No se ejecuta la función, si no le ponemos los parentesis
saludar()
saludar('Mike')
saludar('Sara')
saludar('Bartolomeo')

function sumar(n1, n2) {
    const resultado = n1 + n2
    console.log(resultado)
    return resultado
}

tres = sumar(1, 2)
menos6 = sumar(2, -8)
otroNum = sumar(38378264, 10)

console.log(tres, menos6, otroNum)


function getNombreCompleto(nombre, apellidos) {
    // ...
}

const cfalco = getNombreCompleto('Charly', 'Falco')
if (cfalco === 'Falco, Charly') {
    console.log('La función está bien hecha')
}

const numeros = [1, 3, 9, 4, 7, 0, 2]
// <objeto>.sort -> método: es una función asociada a un objeto
const numerosOrdenados = numeros.sort()
console.log(numerosOrdenados)

const numerosOrdenadosDescendentes = numerosOrdenados.reverse()
console.log(numerosOrdenadosDescendentes)

const frase = "El canario está en la jaula..."
const fraseCambiada = frase.replace('o', '0')
console.log(fraseCambiada)

const frase2 = "El canario y el periquito están en la jaula..."
const frase2Cambiada = frase2.replaceAll('o', '0')
console.log(frase2Cambiada)