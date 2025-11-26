import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Informes {
  URL: string = 'http://localhost:3000/informes'

  constructor(
    private http: HttpClient,
  ) {}

  getInformes() {
    return this.http.get(this.URL)
    // return [
    //   {
    //     id: 1,
    //     titulo: 'El caballo blanco de Santiago',
    //     contenido: 'El caballo blanco de Santiago, no era blanco, era gris.',
    //     usuarioId: 1,
    //     fechaAlta: Date.now(),
    //     estado: 'investigando'
    //   },
    //   {
    //     id: 2,
    //     titulo: 'El niño vampiro sale de la cueva',
    //     contenido: 'Tras 1900 años encerrado en la cueva, se ha descubierto que por las noches si que salia.',
    //     usuarioId: 1,
    //     fechaAlta: Date.now(),
    //     estado: 'cerrado'
    //   },
    // ]
  }

  addInforme(informe: any) {
    // console.log(informe)
    return this.http.post(this.URL, informe)
  }

  // GET - Obtener datos
  // POST - Crear datos
  // DELETE - Eliminar datos
  // PUT - Actualizar datos
  
}
