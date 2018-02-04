import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart.component';
import { CartService } from './cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { UtilsModule } from '../utils/index';

@NgModule({
  declarations: [CartComponent, CartItemComponent, CartListComponent],
  imports: [CommonModule, RouterModule, FormsModule, UtilsModule],
  exports: [CartComponent, CartItemComponent, CartListComponent],
  providers: [CartService]
})
export class CartModule { }
