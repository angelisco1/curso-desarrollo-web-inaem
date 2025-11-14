const fecha = new Date()
console.log(fecha)

// 0 -> Enero
// 1 -> Febrero
// ...
// 11 -> Diciembre
const fecha1 = new Date(2000, 1, 30)
console.log(fecha1)

const fecha2 = new Date(2000, 0, 23)
console.log(fecha2)

const fecha3 = new Date(2000, 0, 23, 1, 0, 0)
console.log(fecha3)

const timestamp = Date.now()
console.log(timestamp)

const fechaActual = new Date(timestamp)
console.log(fechaActual)

/*
Podemos acceder a las propiedades de la fecha:
- fecha.<metodo>
*/
console.log(fechaActual.getFullYear())
console.log(fechaActual.getMonth())
console.log(fechaActual.getDate())
console.log(fechaActual.getHours())
console.log(fechaActual.getMinutes())
console.log(fechaActual.getSeconds())

console.log(fechaActual.getDay())

console.log(fechaActual.toLocaleString())
console.log(fechaActual.toLocaleDateString())
console.log(fechaActual.toLocaleTimeString())