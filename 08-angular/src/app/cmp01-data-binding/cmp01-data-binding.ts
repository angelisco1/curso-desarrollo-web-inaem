import { Component } from '@angular/core';
import { Producto } from '../components/producto/producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cmp01-data-binding',
  imports: [
    Producto,
    FormsModule,
  ],
  templateUrl: './cmp01-data-binding.html',
  styleUrl: './cmp01-data-binding.css',
})
export class Cmp01DataBinding {
  nombre: string = 'Ángel'
  urlLogo: string = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Angular_gradient_logo.png'

  getNombre() {
    return this.nombre
  }

  saludar() {
    alert(`Hola ${this.nombre}`)
  }

  mostrarHref(event: Event) {
    event.preventDefault()
    // Operador optional chaining ?. Mirar el ejemplo al final del archivo de funciones.js
    console.log(event)
    const target = event.target as HTMLAnchorElement
    
    console.log(target.href)
  }

  resetNombre() {
    this.nombre = 'Ángel'
  }
}
