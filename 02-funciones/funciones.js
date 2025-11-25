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

const tres = sumar(1, 2)
const menos6 = sumar(2, -8)
const otroNum = sumar(38378264, 10)

console.log(tres, menos6, otroNum)


function getNombreCompleto(nombre, apellidos) {
    return `${apellidos}, ${nombre}`
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

/*
    FUNCIONES FLECHA (ARROW FUNCTIONS)

function nombreFn(param1, param2) {
    return param1 + param2
}

(param1, param2) => {
    return param1 + param2
}

(param1, param2) => param1 + param2

nombre => `Hola ${nombre}`
(nombre) => `Hola ${nombre}`
*/

const fnSuma = (param1, param2) => {
    return param1 + param2
}

const cuatro = fnSuma(2, 2)
console.log(cuatro)

const fnResta = (param1, param2) => param1 - param2
const seis = fnResta(8, 2)
console.log(seis)

const fnSaludar = nombre => `Hola ${nombre}`
console.log(fnSaludar('Gumersindo'))

/*
EJERCICIO:

- Crear una función normal que dada la temperatura en grados celsius, nos la convierta a grados farenheit
- Crear la misma función pero como función flecha
*/

function celsiusToFarenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

const celsiusToFarenheit1 = (celsius) => {
    return (celsius * 9 / 5) + 32
}

const celsiusToFarenheit2 = (celsius) => (celsius * 9 / 5) + 32

console.log(celsiusToFarenheit(10))
console.log(celsiusToFarenheit1(10))
console.log(celsiusToFarenheit2(10))

const temperaturasHoyZaragoza = [18, 16, 14, 24, 14, 14, 17, 21]

/*
    MÉTODOS DE LOS ARRAYS

    <array>.map(<funcion de callback>)
    <array>.filter(<funcion de callback>)
*/
const temps = temperaturasHoyZaragoza.map(celsiusToFarenheit2)
console.log(temperaturasHoyZaragoza)
console.log(temps)

const temps2 = temperaturasHoyZaragoza.map((celsius) => (celsius * 9 / 5) + 32)
console.log(temps2)

const trabajadores = [
    {
        nombre: 'Charly',
        apellido: 'Falco',
        edad: 48,
        puesto: 'desarrollador'
    },
    {
        nombre: 'Sara',
        apellido: 'Smith',
        edad: 27,
        puesto: 'desarrollador'
    },
    {
        nombre: 'Fernando',
        apellido: 'Alonso',
        edad: 33,
        puesto: 'chofer'
    },
]

const empresa = 'laempresa'

/*
EJERCICIO:

Generar un email de empresa por cada trabajador
*/
console.log('Ángel'[0])
console.log('Ángel'[0].toLowerCase())

const getEmail = (trabajador) => {
    return `${trabajador.nombre[0]}${trabajador.apellido}@${empresa}.com`.toLowerCase()
}

const emailsTrabajadores = trabajadores.map(getEmail)
console.log(emailsTrabajadores)

// Filter -> filtra un array y devuelve otro array solo que los valores que cumplen el filtro

const esMayorDe20 = (num) => num > 20
console.log(esMayorDe20(17))
console.log(esMayorDe20(31))

const tempsMayoresDe20 = temperaturasHoyZaragoza.filter(esMayorDe20)
console.log(tempsMayoresDe20)


/*
EJERCICIO:

Obtener la lista de trabajadores que son desarrolladores
*/
const esDesarrollador = (trabajador) => {
    return trabajador.puesto === 'desarrollador'
}

const desarrolladores = trabajadores.filter(esDesarrollador)
console.log(desarrolladores)

const nombresDesarrolladores = desarrolladores.map((trabajador) => trabajador.nombre)
console.log(nombresDesarrolladores)



const datosPersona = {
    nombre: '',
    contacto: {
        email: '',
        telefono: {
            movil: '+34 666777888',
            // fijo: {
            //     numero: '999777555'
            // }
        }
    }
}
console.log(datosPersona.contacto.telefono.fijo?.numero)
// if (datosPersona.contacto.telefono
//     && datosPersona.contacto.telefono.fijo
//     && datosPersona.contacto.telefono.fijo.numero)