import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'platos',
  imports: [],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {
  constructor (private route: ActivatedRoute) {
    const bookId = this.route.snapshot.paramMap.get('libroId');
    console.log('Parámetro URL: ', bookId);
  }

}
