import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartService, CartResolveGuard  } from '.';
import { CartRoutingModule, cartRouterComponents } from './cart.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [
    cartRouterComponents,
    CartItemComponent
  ],
  providers: [
  // CartService,
  CartResolveGuard]
})
export class CartModule {}

