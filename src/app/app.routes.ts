import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { PlatosComponent } from './components/platos/platos.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PageError404Component } from './components/page-error-404/page-error-404.component';


export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'libros/:libroId/platos', component: LibrosComponent },
    { path: 'platos', component: PlatosComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: '**', component: PageError404Component },
];
