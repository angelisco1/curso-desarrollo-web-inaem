const a = 2
const b = 2

console.log(a === b)

const lista1 = [1, 2, 3]
const lista2 = [1, 2, 3]

console.log(lista1 === lista2)

lista1.push(4)
lista2.push(5)
console.log(lista1)
console.log(lista2)

const lista3 = lista1

lista3.push(6)
console.log(lista3)
console.log(lista1)

console.log(lista1 === lista3)

// const lista4 = [].concat(lista2)
// Spread operator
const lista4 = [...lista2]
lista4.push(7)
console.log(lista4)
console.log(lista2)

const lista5 = [...lista2, 8, 9]
const lista6 = [lista2, 8, 9]
console.log(lista5)
console.log(lista6)

/*
Ejercicio
- Crear una constante yaml que sea igual a json.
- Después modificar el nombre a Yaml.
- Mostrar las 2 constantes, y comprobar que cada una tiene el nombre correcto.
*/
const json = {
    nombre: 'Json',
    apellido: 'Statham'
}
// const yaml = Object.assign({}, json)
const yaml = {...json}
yaml.nombre = 'Yaml'

const toml = {
    ...json,
    nombre: 'Toml'
}

console.log(yaml)
console.log(json)
console.log(toml)