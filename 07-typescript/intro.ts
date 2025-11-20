let n: number = 2
// n = 'dos'

let nombre: string = 'Charly'
let estaActivo: boolean = false

// NO deberíamos de utilizar any
let cualquierCosa: any = 'cualquier cosa'
cualquierCosa = 4
cualquierCosa = true

const fn1 = () => {
    // return '3'
    return 3
}

const resultado: number = fn1() + 6
console.log(resultado)

// TSC
// Transpilar

const numeros: Array<number | string> = [1, 2, 3]
const numeros2: number[] | string[] = [4, 5, 6]

// Unión de tipos
let numero: number | string = 'dos'
numero = 7

const persona: {
    nombre: string,
    apellido: string,
    email: string
} = {
    nombre: 'Charly',
    apellido: 'Falco',
    email: 'cfalco@gmail.com',
    // edad: 49
}

type Persona = {
    nombre: string,
    apellido: string,
    email: string
}

const mike: Persona = {
    nombre: 'Mike',
    apellido: 'Kozinski',
    email: 'mike@gmail.com'
}


type Edad = number
const edad: Edad = 90

const nulo: null = null
const indefinido: undefined = undefined

const sumar = (n1: number, n2: number): number => {
    return n1 + n2
}

const saludar = (nombre: string): void => {
    console.log(`Hola, ${nombre}`)
}

// Type vs Interfaces
type Producto = {
    id: string,
    nombre: string,
    precio: number,
    cantidad: number
}

interface CarritoCompra {
    productos: Array<Producto>,
    // addProducto: (p: Producto) => void
    addProducto(p: Producto): void,
}

const carrito1: CarritoCompra = {
    productos: [],
    addProducto: function(p: Producto) {
        console.log(this)
        this.productos.push(p)

        function mostrarCarrito() {
            console.log('Dentro', this)
        }
        // mostrarCarrito = mostrarCarrito.bind(this)
        mostrarCarrito = mostrarCarrito.bind(mike)
        mostrarCarrito()

        let mostrarCarrito2 = () => {
            console.log('Dentro 2: ', this)
        }
        mostrarCarrito2()

    }
}

const pan: Producto = {
    id: "abc",
    nombre: 'Pan',
    precio: 2.30,
    cantidad: 2
}

carrito1.addProducto(pan)

console.log(this)