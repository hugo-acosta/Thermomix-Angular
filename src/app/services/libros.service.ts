import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  public recuperarLibros$(): Observable<any> {
    const url = 'http://localhost:8080/controlador.php?operacion=obtener_libros';

    const libros = this.http.get(url).pipe(
      // @ts-ignore
      map(response => response.libros),
    );

    return libros;
  }

}
