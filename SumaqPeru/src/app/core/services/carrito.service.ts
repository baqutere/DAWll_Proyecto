import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Carrito } from 'app/data/interfaces/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private baseUrl = 'http://localhost:9592/carrito';

  constructor(private http: HttpClient) { }

  guardarCarrito(carrito: Carrito): Observable<Carrito> {
    const sessionId = this.getSessionId();

    if (sessionId) {
      carrito.sessionId = sessionId;
    } else {
      console.error('No session ID found in localStorage');
    }

    return this.http.post<Carrito>(`${this.baseUrl}/guardarCarrito`, carrito);
  }

  obtenerCarritoDeSesion(): Observable<Carrito[]> {
    const sessionId = this.getSessionId();

    if (sessionId) {
      return this.http.get<Carrito[]>(`${this.baseUrl}/obtenerCarritoDeSesion/${sessionId}`);
    } else {
      console.error('No session ID found in localStorage');
      return of([]);
    }
  }

  eliminarItemCarrito(idCarrito: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminarItem/${idCarrito}`);
  }

  actualizarCarrito(itemsCarrito: Carrito[]): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/actualizarCarrito`, itemsCarrito);
  }

  private getSessionId(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('sessionId');
    } else {
      return null;
    }
  }
}
