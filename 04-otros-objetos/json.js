const persona = {
    nombre: 'JSON',
    apellido: 'Statham',
}

// Convierte un objeto de JS a un string en formato JSON
const personaComoString = JSON.stringify(persona, null, 2)
const personaComoString2 = JSON.stringify(persona, null)

console.log(persona)
console.log(personaComoString)
console.log(personaComoString2)

console.log(persona.nombre)
// console.log(personaComoString.nombre)

const yamlComoString = '{"nombre":"YAML","apellido":"Statham"}'

// Convierte un string en formato JSON a un objeto de JS
const yaml = JSON.parse(yamlComoString)
console.log(yaml.nombre)