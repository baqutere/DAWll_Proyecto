import { ComponentModule } from './../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanPanelComponent } from './artisan-panel/artisan-panel.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArtisanPanelComponent,
    PedidosComponent,
    ProductosComponent,
    AddProductoComponent,
    EditProductoComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    AppRoutingModule,
    UsuarioModule,
    ReactiveFormsModule
  ]
})
export class ArtisanPanelModule { }
