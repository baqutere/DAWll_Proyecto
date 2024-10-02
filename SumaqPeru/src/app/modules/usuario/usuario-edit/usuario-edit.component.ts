import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrl: './usuario-edit.component.css'
})
export class UsuarioEditComponent implements OnInit {
  editForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = '';

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Aquí puedes cargar los datos del usuario para editar si es necesario
  }

  onSubmit() {
    if (this.editForm.valid) {
      // Lógica para guardar los datos editados
      console.log('Datos del usuario actualizados:', this.editForm.value);
    }
  }

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  cancel() {
    // Lógica para cancelar la edición
    console.log('Edición cancelada');
  }
}
