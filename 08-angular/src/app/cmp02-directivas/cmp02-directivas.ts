import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-cmp02-directivas',
  imports: [FormsModule, NgClass],
  templateUrl: './cmp02-directivas.html',
  styleUrl: './cmp02-directivas.css',
})
export class Cmp02Directivas {
  animales: Array<string> = [
    'tortuga',
    'periquito',
    'langosta',
    'conejo'
  ]

  suscripciones: Array<any> = []

  usuarioValido: any = {
    username: 'angel1234',
    password: '1234',
    rol: 'premium'
  }
  estasAutenticado: boolean = false
  username: string = ''
  password: string = ''

  ngOnInit() {
    console.log('Se acaba de inicializar el componente')
    this.suscripciones = JSON.parse(localStorage.getItem('suscripciones') || '[]')
  }

  login() {
    if (this.usuarioValido.username === this.username
      && this.usuarioValido.password === this.password) {
        this.estasAutenticado = true
      }
  }
}
