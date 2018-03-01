import { CartModule } from './../cart/cart.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsAPIProvider } from './products.config';

import { ProductListComponent, ProductComponent } from '.';
import { ProductsService } from './services/products.service';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent],
  imports: [
    CartModule,
    CommonModule,
    FormsModule, ProductsRoutingModule
  ],
  providers: [ProductsService, ProductsAPIProvider]
})
export class ProductsModule { }
