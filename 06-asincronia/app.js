const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const API_URL_INSTRUCCIONES = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const buscarCocktails = async (filtro) => {
    const response = await fetch(`${API_URL}${filtro}`)
    
    console.log(response)

    // response.json()
    //     .then((data) => {

    //     })
    const data = await response.json()
    console.log(data)
    
    return data.drinks
    // return [
    //     {
    //         idDrink: 11007,
    //         strDrink: 'Margarita',
    //         strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
    //     }
    // ]
}

const buscarInstrucciones = async (id) => {
    const response = await fetch(`${API_URL_INSTRUCCIONES}${id}`)
    const data = await response.json()
    console.log(data)
    const instrucciones = data.drinks[0].strInstructionsES
    return instrucciones
}

const pintarCocktails = (cocktails) => {
    const listado = document.querySelector('#listadoCocktails')

    const listaCocktailsHtml = cocktails.map((cocktail) => {
        return `<li id="${cocktail.idDrink}">
            ${cocktail.strDrink}
            <img src="${cocktail.strDrinkThumb}" width="80" alt="Imagen de ${cocktail.strDrink}" />
            <button type="button" data-id="${cocktail.idDrink}" class="btnInstrucciones">
                Ver instrucciones
            </button>
        </li>`
    })

    listado.innerHTML = listaCocktailsHtml.join('')

    const botones = document.querySelectorAll('.btnInstrucciones')
    console.log(botones)

    botones.forEach((boton) => {
        boton.addEventListener('click', async () => {
            const id = boton.dataset.id

            const elementoLi = boton.parentElement
            const mismoId = elementoLi.id

            // buscarInstrucciones(mismoId)
            const instruccionesDelCocktail = await buscarInstrucciones(id)
            console.log(instruccionesDelCocktail)
            alert(instruccionesDelCocktail)
        })
    })

}

const formulario = document.querySelector('#buscador')
formulario.addEventListener('submit', async (event) => {
    event.preventDefault()

    const cocktailABuscar = formulario.elements.filtro.value

    const cocktails = await buscarCocktails(cocktailABuscar)

    pintarCocktails(cocktails)
})



/*
EJERCICIO:

- Poner un botón al lado de cada cocktail.
- Obtener del HTML el id correspondiente a dicho cocktail.
- Al pulsar el botón, hay que hacer una petición a la URL:
-- https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=<id>
- De los datos recibidos, coger "strInstructions" y mostrarlas en un alert
*/