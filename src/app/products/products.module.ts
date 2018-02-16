import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';

import { ProductListComponent, ProductComponent, ProductFormComponent, ProductArrayService } from '.';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent, ProductFormComponent],
  imports: [
    CommonModule,
    FormsModule, ProductsRoutingModule
  ],
  providers: [ProductArrayService]
})
export class ProductsModule { }
