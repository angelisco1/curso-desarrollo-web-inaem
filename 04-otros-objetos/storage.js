// Versión sin defer
window.addEventListener('load', () => {
    // Obtenemos el valor asociado a la clave cuenta en el localStorage
    let valorInicial = localStorage.getItem('cuenta')
    if (!valorInicial) {
        valorInicial = 0
    }
    document.getElementById('cuenta').textContent = valorInicial


    const btnDec = document.getElementById('btnDecrementar')
    btnDec.addEventListener('click', () => {
        const cuenta = document.getElementById('cuenta')
        const valor = Number(cuenta.textContent) - 1
        cuenta.textContent = valor

        // Guarda el valor asociado a la clave 'cuenta' en el localStorage
        localStorage.setItem('cuenta', valor)
    })

    const btnInc = document.getElementById('btnIncrementar')
    btnInc.addEventListener('click', () => {
        const cuenta = document.getElementById('cuenta')
        const valor = Number(cuenta.textContent) + 1
        cuenta.textContent = valor

        localStorage.setItem('cuenta', valor)
    })

})

// Versión con defer o con el script al final del todo
// const btnDec = document.getElementById('btnDecrementar')
// btnDec.addEventListener('click', () => {
//     const cuenta = document.getElementById('cuenta')
//     const valor = Number(cuenta.textContent) - 1
//     cuenta.textContent = valor
// })


