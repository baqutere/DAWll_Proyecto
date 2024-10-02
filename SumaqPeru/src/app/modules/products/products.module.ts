import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from "../../shared/components/components.module";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from 'app/app-routing.module';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,

    AppRoutingModule

]
})
export class ProductsModule { }
