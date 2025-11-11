console.log("hola mundo");

var nombre = 'Ángel';
// nombre = 2;
console.log(typeof nombre)

var Nombre = 'Charly'

// Un comentario de línea
/* Un comentario de
múltiples líneas
*/

// var edad;

/*
 string
 number
 boolean
 undefined
 null
 object
*/

var nombreCompleto = "Ángel Villalba"

/*
    TIPOS DE DATOS
*/

// String
let apellido = "Villalba"
apellido = 'Villalba Fernández-Paniagua'

const dni = '00000000T'
// dni = '888'

// String Interpolation o Template String

console.log('Hola, me llamo ' + nombre + ' ' + apellido + '.')
console.log(`Hola, me llamo ${nombre} ${apellido}.`)

/*
Valores truthy y falsy
- Truthy -> true, 1, -1, "Ángel", Infinity, [], {}
- Falsy -> false, 0, "", undefined, null, NaN
*/
if (NaN) {
    console.log("Es truthy")
} else {
    console.log("Es falsy")
}

// Array
const colores = ['naranja', 'azul', 'rojo', 'amarillo']
const sabores = new Array('naranja', 'piña', 'fresa', 'limón')

const listaVaciaDe3Elementos = new Array(3)

// Objetos
const persona = {
    nombre: 'Charly',
    apellidos: 'Falco',
    direccion: {
        tipo: 'calle',
        nombre: 'Norte',
        numero: 28,
    },
    hobbies: ['tenis', 'cine']
}
console.log(persona)

// Array de 3 personas. Cada persona tiene que tener nombre y email.
const tresPersonas = [
    {
        nombre: 'Charly',
        email: 'charly@gmail.com',
    },
    {
        nombre: 'Ángel',
        email: 'angel@gmail.com',
    },
    {
        nombre: 'Mike',
        email: 'mike@gmail.com',
    },
]

const charly = {
    nombre: 'Charly',
    email: 'charly@gmail.com',
}
const angel = {
    nombre: 'Ángel',
    email: 'angel@gmail.com',
}
const mike = {
    nombre: 'Mike',
    email: 'mike@gmail.com',
}
const lista3Personas = [charly, angel, mike]

console.log(tresPersonas)
console.log(lista3Personas)


// Acceso a arrays
console.log(colores[3])
console.log(sabores[1])

// Acceso a los objetos
console.log(persona['apellidos'])
console.log(persona.apellidos)

// Acceder al nombre de Mike de la lista3Personas
console.log(lista3Personas)
console.log(lista3Personas[2])
console.log(lista3Personas[2]['nombre'])
console.log(lista3Personas[2].nombre)

/*
    OPERADORES
*/

console.log('1' + '2')
console.log('1' + 2)

console.log("1" === 1)
console.log("1" == 1)
console.log("1" !== 1)
console.log("1" != 1)

// Operador ternario -> condicion ? parte-del-if : parte-del-else
const edad = 17
console.log(edad >= 18 ? 'Puede entrar a la discoteca' : 'No puede entrar a la discoteca')


// Consola y popups
console.table(lista3Personas)
console.error('Esto es un error')

// alert('Bienvenido a nuestra web')

// const opcion = confirm('¿Vas a salir el finde?')
// console.log(opcion)

// const password = prompt('Introduce tu contraseña:')
// console.log(password)

/* Ejercicio:

- Paso 1: mostrar un mensaje al usuario dandole la bienvenida a la página de chistes de programadores.
- Paso 2: preguntarle si quiere añadir un chiste (si/no)
- Paso 3.1: si le han dado a no: mostrar "Que soso eres"
- Paso 3.2: si le han dado a si: pedirle que introduzca un chiste y mostrarlo por consola.
*/

const mensaje = alert('Bienvenido a la página de chistes!')
console.log(mensaje)
const hayChiste = confirm('¿Quieres añadir un chiste?')
console.log(hayChiste)

// if (hayChiste) {
//     const chiste = prompt('Introduce un chiste:')
//     alert(chiste)
//     console.log(chiste)
// } else {
//     const mensaje = 'Que soso eres'
//     alert(mensaje)
//     console.log(mensaje) 
// }

const chiste = hayChiste ? prompt('Introduce un chiste:') : 'Que soso eres'
alert(chiste)
console.log(chiste)

// Switch
const nota = 8

switch(nota) {
    case 5:
        console.log('Suficiente')
        break;
    case 6:
        console.log('Bien')
        break;
    case 8:
        console.log('Notable')
        break;
    case 10:
        console.log('Sobresaliente')
        break;
    default:
        console.log('Otra nota')
}

// Bucles FOR

for (let i = 0; i < 3; i++) {
    console.log(i)
}

// En pos se guarda el índice del array de colores en cada iteración
for (let pos in colores) {
    console.log(`${colores[pos]}: ${sabores[pos]}`)
}

// En persona se guarda el valor del array de lista3Personas en cada iteración
for (let persona of lista3Personas) {
    console.log(persona.nombre)
    // console.log(persona['nombre'])
}