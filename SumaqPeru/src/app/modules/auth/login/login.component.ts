import { UsuarioService } from 'app/core/services/usuario.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'app/data/interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = {
    email: '',
    password: ''
  };
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  onSubmit(): void {
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    this.usuario.email = email;
    this.usuario.password = password;

    this.usuarioService.autenticar(this.usuario).subscribe({
      next: (usuarioRespuesta: Usuario) => {
        sessionStorage.setItem('userSession', usuarioRespuesta.nombre!);
        sessionStorage.setItem('userIdSession', usuarioRespuesta.usuarioId!.toString());
        alert('Bienvenido ' + sessionStorage.getItem('userSession'));
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        if (err.status === 404) {
          alert('Usuario no encontrado. Por favor verifica tu correo.');
        } else if (err.status === 401) {
          alert('Contraseña incorrecta. Por favor intenta de nuevo.');
        } else {
          alert('Ha ocurrido un error inesperado. Por favor intenta más tarde.');
        }
      }
    });
  }
}
