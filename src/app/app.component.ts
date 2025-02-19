import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { LibrosComponent } from "./components/libros/libros.component";
import { PlatosComponent } from "./components/platos/platos.component";
import { RecetasComponent } from "./components/recetas/recetas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, InicioComponent, LibrosComponent, PlatosComponent, RecetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2025-02-10-thermomix';
}
