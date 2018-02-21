import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../../products/models/product.model';



@Injectable()
export class OrderService {

//   cartList: CartItem[] = [];

//     getCart (): CartItem[] {
//       return this.cartList;
//   }


//   getCartItem(id: number | string): Observable<CartItem> {
//     return null;
//   }

//   addCartItem(cartItem: CartItem): void {
//     this.cartList.push(cartItem);
//   }

//   updateCartItem(cartItem: CartItem): void {
//   }

//   removeFromCart(id: number): void {
//     const item: CartItem = this.cartList.find((obj) => obj.product.id === id);
//     if (item) {
//       const index: number = this.cartList.indexOf(item);
//       this.cartList.splice(index, 1);
//     }
//   }

//   updateCartContent(newCart: CartItem[]) {
//     this.cartList = newCart;
//   }

//   getTotalPrice(): number {
//     let total = 0;
//     this.cartList.forEach((item) => total += item.price * item.quantity);
//     return Math.round(total * 100) / 100;
//   }

//   clearCart() {
//     this.cartList = [];
//     this.getTotalPrice();
//   }

//   isEmptyCart(): boolean {
//     return this.cartList.length === 0;
//   }
}

