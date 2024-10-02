import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'app/data/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:9591/productos';

  constructor(private http: HttpClient) { }

  guardarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseUrl}/guardarProducto`, producto);
  }

  obtenerProductos(orden?: string, direccion?: string, filtro?: string): Observable<Producto[]> {
    if (orden == undefined) {
      orden = "nombre";
    }
    if (direccion == undefined) {
      direccion = "asc";
    }
    if (filtro == undefined) {
      filtro = "";
    }

    const params = new HttpParams()
                  .set('orden', orden)
                  .set('direccion', direccion)
                  .set('filtro', filtro);

    return this.http.get<Producto[]>(`${this.baseUrl}/obtenerProductos`, { params });
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/obtenerProductoPorId/${id}`);
  }

  obtenerProductoPorNombre(nombre: string): Observable<Producto[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<Producto[]>(`${this.baseUrl}/obtenerProductoPorNombre`, { params });
  }

  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.patch<Producto>(`${this.baseUrl}/editarProducto/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminarProducto/${id}`);
  }

}

