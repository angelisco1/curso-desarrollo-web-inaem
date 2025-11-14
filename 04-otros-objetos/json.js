const persona = {
    nombre: 'JSON',
    apellido: 'Statham',
}

// Convierte un objeto de JS a un string en formato JSON
const personaComoString = JSON.stringify(persona)

console.log(persona)
console.log(personaComoString)

console.log(persona.nombre)
// console.log(personaComoString.nombre)

const yamlComoString = '{"nombre":"YAML","apellido":"Statham"}'

// Convierte un string en formato JSON a un objeto de JS
const yaml = JSON.parse(yamlComoString)
console.log(yaml.nombre)