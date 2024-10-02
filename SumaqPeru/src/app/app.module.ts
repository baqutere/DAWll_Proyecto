import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ComponentModule } from './shared/components/components.module';
import { ArtisanPanelModule } from './modules/artisan-panel/artisan-panel.module';
import { ProductsModule } from './modules/products/products.module';
import {  HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminModule } from './modules/admin/admin.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    AdminModule,
    CheckoutModule,
    ProductsModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    UsuarioModule,
    ArtisanPanelModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    provideClientHydration(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
