
// Selectores de CSS
// De etiqueta -> form
// De id -> #nombre
// De clase -> .check
// Checkboxes marcados -> input[type="checkbox"]:checked

const formulario = document.querySelector('form')
console.log(formulario)

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log('Se ha enviado el formulario')
    console.log(event.target.elements)
})