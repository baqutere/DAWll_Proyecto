import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { ComponentModule } from 'app/shared/components/components.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioEditComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [UsuarioComponent,
    UsuarioEditComponent]
})
export class UsuarioModule { }
