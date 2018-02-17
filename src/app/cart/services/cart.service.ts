import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { CartItem } from './../models/cart-item.model';

const cartList: Array<CartItem> = [
  new CartItem(1, 'Anna', 'Borisova'),
  new CartItem(2, 'Boris', 'Vlasov'),
  new CartItem(3, 'Gennadiy', 'Dmitriev')
];

const cartListObservable: Observable<Array<CartItem>> = of(cartList);

@Injectable()
export class CartService {
  getCart(): Observable<CartItem[]> {
    return cartListObservable;
  }

  getCartItem(id: number | string): Observable<CartItem> {
    return this.getCart()
      .pipe(
        map((cart: Array<CartItem>) => cart.find(cartItem => cartItem.id === +id)),
        catchError(err => Observable.throw('Error in getCart method'))
      );
  }

  addCart(cartItem: CartItem): void {
    cartList.push(cartItem);
  }

  updateCart(cartItem: CartItem): void {
    const i = cartList.findIndex(u => u.id === cartItem.id);

    if (i > -1) {
      cartList.splice(i, 1, cartItem);
    }
  }
}
