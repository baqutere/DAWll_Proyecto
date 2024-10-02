import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'app/data/interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = 'http://localhost:9591/categorias';

  constructor(private http: HttpClient) { }

  obtenerCategorias() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/obtenerCategorias`);
  }

  buscarCategoria(tipoBusqueda: string, valorBusqueda: string) : Observable<Categoria> {
    const params = new HttpParams()
                  .set('tipoBusqueda', tipoBusqueda)
                  .set('valorBusqueda', valorBusqueda);
    return this.http.get<Categoria>(`${this.baseUrl}/buscarCategoria`, {params});
  }
}
