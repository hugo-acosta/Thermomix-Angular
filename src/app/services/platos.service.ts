import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { LibrosService } from './libros.service';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
  private librosService = inject(LibrosService);

  constructor(private http: HttpClient) { }
    
  public recuperarClavesLibros$(): Observable<string[]> {
    return this.librosService.recuperarLibros$().pipe(
      // @ts-ignore
      map(libros => libros.map(libro => libro.clave))
    );
  }

  public recuperarPlatos$(clavesLibros: Array<string>): Observable<any> {
    const peticiones = clavesLibros.map(clave => {
      const url = `http://localhost:8080/controlador.php?operacion=obtener_platos&libro=${clave}`;
      return this.http.get<{ platos: any[] }>(url).pipe(
        map(response => response.platos)
      );
    });

    return forkJoin(peticiones).pipe(
      map(respuestas => respuestas.flat())
    );
    
  }
}
