import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { CartItem } from './../models/cart-item.model';
import { Product } from '../../products/models/product.model';

@Injectable()
export class CartService {

  cartList: CartItem[] = [];

  getCart(): CartItem[] {
    return this.cartList;
  }


  getCartItem(id: number | string): Observable<CartItem> {
    return null;
    // return this.getCart()
    //   .pipe(
    //     map((cart: Array<CartItem>) => cart.find(cartItem => cartItem.id === +id)),
    //     catchError(err => Observable.throw('Error in getCart method'))
    //   );
  }

  addCartItem(cartItem: CartItem): void {
    this.cartList.push(cartItem);
  }

  updateCartItem(cartItem: CartItem): void {
    // const i = this.cartList.findIndex(u => u.id === cartItem.id);

    // if (i > -1) {
    //   this.cartList.splice(i, 1, cartItem);
    // }
  }



  addToCart(product: Product, q?: number) {
    const quantity = +q;
    const cart = this.cartList;
    let item = cart.find((p) => p.product.id === product.id);
    if (item === undefined) {
      item = new CartItem(product, quantity || 1);
      cart.push(item);
    } else {
      item.quantity = item.quantity + (quantity || 1);
    }
    this.getTotalPrice();
  }

  getItemsNumber() {
    return this.cartList.length;
  }

  removeFromCart(id: number): void {
    const item: CartItem = this.cartList.find((obj) => obj.product.id === id);
    if (item) {
      const index: number = this.cartList.indexOf(item);
      this.cartList.splice(index, 1);
    }
  }

  updateCartContent(newCart: CartItem[]) {
    this.cartList = newCart;
  }

  getTotalPrice(): number {
    let total = 0;
    this.cartList.forEach((item) => total += item.price * item.quantity);
    return Math.round(total * 100) / 100;
  }

  clearCart() {
    this.cartList = [];
    this.getTotalPrice();
  }

  isEmptyCart(): boolean {
    return this.cartList.length === 0;
  }
}

