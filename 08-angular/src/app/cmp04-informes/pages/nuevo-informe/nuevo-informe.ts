import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Informes } from '../../services/informes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-informe',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './nuevo-informe.html',
  styleUrl: './nuevo-informe.css',
})
export class NuevoInforme {
  // datos = {
  //   titulo: '',
  //   contenido: ''
  // }

  formInforme: FormGroup | null = null

  constructor(
    private informesService: Informes,
    private router: Router,
  ) {}

  ngOnInit() {
    this.formInforme = this.initForm()
  }

  guardar() {

      const informe = this.formInforme?.value

      this.informesService.addInforme(informe)
        .subscribe((datos) => {
          console.log(datos)
          this.router.navigateByUrl('/inicio')
        })
  }


  // FORMULARIOS REACTIVOS
  private initForm() {
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      contenido: new FormControl('', [Validators.required, Validators.minLength(8)]),
      estado: new FormControl('creado'),
      usuarioId: new FormControl(1),
      fechaAlta: new FormControl(Date.now())
    })
  }
}
