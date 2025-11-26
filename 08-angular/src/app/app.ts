import { Component } from '@angular/core';
import { Cmp01DataBinding } from './cmp01-data-binding/cmp01-data-binding';
import { Cmp02Directivas } from "./cmp02-directivas/cmp02-directivas";
import { Cmp03Pipes } from "./cmp03-pipes/cmp03-pipes";
import { Cmp04Informes } from "./cmp04-informes/cmp04-informes";


@Component({
  selector: 'app-root',
  imports: [
    Cmp01DataBinding,
    Cmp02Directivas,
    Cmp03Pipes,
    Cmp04Informes
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
