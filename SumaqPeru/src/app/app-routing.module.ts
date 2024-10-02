import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './shared/components/pagina-principal/pagina-principal.component';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import { ProductDetailsComponent } from './modules/products/product-detail/product-detail.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { CartComponent } from './modules/cart/cart/cart.component';
import { CheckoutComponent } from './modules/checkout/checkout/checkout.component';
import { ArtisanPanelComponent } from './modules/artisan-panel/artisan-panel/artisan-panel.component';
import { AdminComponent } from './modules/admin/admin/admin.component';
import { UsuarioComponent } from './modules/usuario/usuario/usuario.component';
import { UsuarioEditComponent } from './modules/usuario/usuario-edit/usuario-edit.component';
import { ProductosComponent } from './modules/artisan-panel/productos/productos.component';
import { EditProductoComponent } from './modules/artisan-panel/edit-producto/edit-producto.component';
import { AddProductoComponent } from './modules/artisan-panel/add-producto/add-producto.component';
import { PedidosComponent } from './modules/artisan-panel/pedidos/pedidos.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'inicio', component: PaginaPrincipalComponent },
  { path: 'user-profile', component: UsuarioComponent },
  { path: 'user-edit', component: UsuarioEditComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products-detail/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'artisan-panel', component: ArtisanPanelComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'product-artisan', component: ProductosComponent},
  { path: 'add-product-artisan', component: AddProductoComponent},
  { path: 'edit-product-artisan', component: EditProductoComponent},
  { path: 'orders', component: PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
