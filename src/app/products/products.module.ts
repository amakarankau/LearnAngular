import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
import { Product } from './product/entity/product-model';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
