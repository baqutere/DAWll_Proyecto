import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  user = {
    name: 'Juan Pérez',
    address: 'Av. Siempre Viva 123',
    phone: '555-1234'
  };

  // Método para editar el perfil
  editProfile() {
    console.log('Editar perfil:');
    // Aquí puedes añadir lógica para navegar a un formulario de edición o mostrar un modal
  }

  // Método para eliminar el perfil
  deleteProfile() {
    console.log('Eliminar perfil:');
    // Aquí puedes añadir lógica para confirmar la eliminación y llamar a un API de eliminación
  }
  }
