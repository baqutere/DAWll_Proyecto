import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from 'app/data/interfaces/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private baseUrl = 'http://localhost:9592/pedido';

  constructor(private http: HttpClient) { }

  guardarPedido(pedido: Pedido): Observable<Pedido> {
    const sessionId = this.getSessionId();
    return this.http.post<Pedido>(`${this.baseUrl}/guardarPedido/${sessionId}`, pedido);
  }

  private getSessionId(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('sessionId');
    } else {
      return null;
    }
  }
}
