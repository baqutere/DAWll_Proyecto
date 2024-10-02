import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrl: './edit-producto.component.css'
})
export class EditProductoComponent {
  productForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      image: [''],
      description: ['']
    });
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  // Método para guardar cambios
  onSubmit(): void {
    // Lógica para enviar los datos del formulario
  }

}



