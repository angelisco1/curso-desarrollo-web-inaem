let n = 2;
// n = 'dos'
let nombre = 'Charly';
let estaActivo = false;
// NO deberíamos de utilizar any
let cualquierCosa = 'cualquier cosa';
cualquierCosa = 4;
cualquierCosa = true;
const fn1 = () => {
    // return '3'
    return 3;
};
const resultado = fn1() + 6;
console.log(resultado);
// TSC
// Transpilar
const numeros = [1, 2, 3];
const numeros2 = [4, 5, 6];
// Unión de tipos
let numero = 'dos';
numero = 7;
const persona = {
    nombre: 'Charly',
    apellido: 'Falco',
    email: 'cfalco@gmail.com',
    // edad: 49
};
const mike = {
    nombre: 'Mike',
    apellido: 'Kozinski',
    email: 'mike@gmail.com'
};
const edad = 90;
const nulo = null;
const indefinido = undefined;
const sumar = (n1, n2) => {
    return n1 + n2;
};
const saludar = (nombre) => {
    console.log(`Hola, ${nombre}`);
};
// const carrito1: CarritoCompra = {
//     productos: [],
//     addProducto: function(p: Producto) {
//         console.log(this)
//         this.productos.push(p)
//         function mostrarCarrito() {
//             console.log('Dentro', this)
//         }
//         // mostrarCarrito = mostrarCarrito.bind(this)
//         mostrarCarrito = mostrarCarrito.bind(mike)
//         mostrarCarrito()
//         let mostrarCarrito2 = () => {
//             console.log('Dentro 2: ', this)
//         }
//         mostrarCarrito2()
//     },
//     mostrarTotal() {
//         let total = 0
//         this.productos.forEach((p: Producto) => {
//             total += p.precio * p.cantidad
//         })
//         return total + '€'
//     }
// }
// const pan: Producto = {
//     id: "abc",
//     nombre: 'Pan',
//     precio: 2.30,
//     cantidad: 2
// }
// // carrito1.mostrarTotal = carrito1.mostrarTotal.bind(carrito1)
// carrito1.addProducto(pan)
// console.log(carrito1.mostrarTotal())
// // console.log(this)
