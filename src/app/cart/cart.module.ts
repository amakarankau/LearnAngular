import { OrderByPipe } from './../core/pipes/order-by.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartService, CartResolveGuard } from '.';
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
    OrderByPipe,
  // CartService,
  CartResolveGuard]
})
export class CartModule {}

