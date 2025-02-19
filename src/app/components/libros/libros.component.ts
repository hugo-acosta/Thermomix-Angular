import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'libros',
  imports: [ CommonModule ],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  private service = inject(LibrosService);
  libros$ = this.service.recuperarLibros$();
}
