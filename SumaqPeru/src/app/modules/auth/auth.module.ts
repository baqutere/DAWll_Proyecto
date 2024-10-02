import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class AuthModule { }


