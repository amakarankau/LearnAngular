import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
import { Product } from './product/entity/product-model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent, ProductComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
