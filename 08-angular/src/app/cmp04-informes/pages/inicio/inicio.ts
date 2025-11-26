import { Component } from '@angular/core';
import { Informes } from '../../services/informes';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [
    AsyncPipe
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  informes: Array<any> = []
  informes$: Observable<any> = new Observable()

  constructor(
    private informesService: Informes,
  ) { }

  ngOnInit() {
    console.log('PASA POR AQUI')
    this.informes$ = this.informesService.getInformes()
      // .subscribe((datos: any) => {
      //     console.log('DATOS', datos)
      //     this.informes = datos
      //     console.log('INFORMES', this.informes)
      //   })
  }

}
