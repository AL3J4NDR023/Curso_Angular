import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YComponent } from "../y/y.component";

@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [CommonModule, YComponent],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})
export class ListaDestinosComponent {
  destinos: string[];
  constructor(){
    this.destinos = ['Barranqilla', 'Lima', 'Buenos Aires', 'Barcelona'];
  }
}
