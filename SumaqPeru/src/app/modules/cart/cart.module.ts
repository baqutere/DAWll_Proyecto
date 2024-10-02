import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ComponentModule } from 'app/shared/components/components.module';
import { AppRoutingModule } from 'app/app-routing.module';



@NgModule({
  declarations: [
    CartComponent,

  ],
  imports: [

    CommonModule,
    AppRoutingModule,
    ComponentModule,

  ],
  exports: [
    CartComponent,
  ]
})
export class CartModule { }
