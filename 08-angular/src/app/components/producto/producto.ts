import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [
    CurrencyPipe,
    DatePipe,
    TitleCasePipe,
  ],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  producto: any = {
    titulo: 'Marcador fluorescente stabilo boss amarillo',
    descripcion: 'Punta bizelada. Ideal para destacar el texto. Se seca rapidamente.',
    precio: 1.82,
    fechaLanzamiento: new Date(1980, 2, 22),
    imagenUrl: 'https://images.metro-marketplace.eu/item_image/7db0b4aa-ac29-4c36-a4f3-9785106d22b8?impolicy=pdp_main_gallery_preview&imwidth=768'
  }
}
