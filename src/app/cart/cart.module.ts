// import { OrderByPipe } from './../shared/pipes/order-by.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartResolveGuard } from '.';
import { CartRoutingModule, cartRouterComponents } from './cart.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CartRoutingModule
  ],
  declarations: [
    cartRouterComponents,
    CartItemComponent
  ],
  providers: [
  CartResolveGuard]
})
export class CartModule {}

