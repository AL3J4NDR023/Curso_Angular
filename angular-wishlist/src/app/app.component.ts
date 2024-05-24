import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YComponent } from './y/y.component';
import { ListaDestinosComponent } from "./lista-destinos/lista-destinos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YComponent, ListaDestinosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-wishlist';
}
