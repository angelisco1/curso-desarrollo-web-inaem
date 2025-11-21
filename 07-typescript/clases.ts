import { v4 as uuidV4} from 'uuid'

// Clases


// '2025-10-12' -> [2025, 10, 12]
// const fechaSeparada = '2025-10-12'.split('-')
// const year = fechaSeparada[0]
// const month = fechaSeparada[1]
// const day = fechaSeparada[2]
// const fechaJs = new Date(Number(year), Number(month), Number(day))

class Suscripcion {
    public id: string

    constructor(
        // public id: string,
        public nombre: string,
        public email: string,
        public tyc: boolean,
        public publi: boolean,
        public datos: boolean,
        public timestamp: number = Date.now(),
    ) {
        this.id = uuidV4()
    }

    getDiasSuscrito(): number {
        const timestampActual = Date.now()
        const diferenciaDeMs = timestampActual - this.timestamp
        const dias = diferenciaDeMs / (3600000 * 24)
        return Math.round(dias)
    }

}

const suscripcionAngel = new Suscripcion(
    'Ángel',
    'angel@gmail.com',
    true,
    true,
    false,
    new Date(2025, 10, 18, 19).getTime(),
)

console.log(suscripcionAngel.nombre)

const suscripcionesNewsletter: Array<Suscripcion> = []

// Ejercicio: añadir 3 suscripciones en la lista
suscripcionesNewsletter.push(suscripcionAngel)

const suscripcionSara = new Suscripcion(
    'Sara',
    'sara@gmail.com',
    true,
    false,
    false,
    new Date(2024, 10, 18, 19).getTime(),
)

const suscripcionCharly = new Suscripcion(
    'Charly',
    'charly@gmail.com',
    true,
    false,
    false,
)

suscripcionesNewsletter.push(suscripcionSara, suscripcionCharly)
console.log(suscripcionesNewsletter)

console.log(suscripcionAngel.getDiasSuscrito())
console.log(suscripcionSara.getDiasSuscrito())
console.log(suscripcionCharly.getDiasSuscrito())