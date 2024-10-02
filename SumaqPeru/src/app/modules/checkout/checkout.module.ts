import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';

import { RouterModule } from '@angular/router';
import { CartModule } from '../cart/cart.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CheckoutComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    CartModule,
    ReactiveFormsModule
  ],
  exports:[CheckoutComponent]
})
export class CheckoutModule { }
