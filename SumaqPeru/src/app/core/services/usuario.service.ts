import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'app/data/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:9590/usuarios';

  constructor(private http: HttpClient) { }

  autenticar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/login`, usuario);
  }

  obtenerUsuarioLogeado(): Observable<Usuario> {
    const usuarioId = this.getUsuarioId();

    const params = new HttpParams()
                        .set('tipoBusqueda', 'id')
                        .set('valorBusqueda', usuarioId!);

    return this.http.get<Usuario>(`${this.baseUrl}/buscarUsuario`, {params});
  }

  private getUsuarioId(): number | null {
    if (typeof window !== 'undefined') {
      const userId = parseInt(sessionStorage.getItem('userIdSession')!, 10);
      return userId;
    } else {
      return null;
    }
  }
}
