import { Injectable } from '@angular/core';

import { Product } from '../products/product/entity/product-model';
import { CartItem } from './cart-item/index';

@Injectable()
export class CartService {

    cartList: CartItem[] = [];

    constructor() { }

    getCart (): CartItem[] {
        return this.cartList;
    }

    addToCart(product: Product) {
        debugger;
        const cart = this.cartList;
        let item = cart.find((p) => p.product.id === product.id);
        if (item === undefined) {
          item = new CartItem(product, 1);
          cart.push(item);
        } else {
            item.quantity += 1;
        }


//        cart.items = cart.items.filter((cartItem) => cartItem.quantity > 0);

        this.getTotalPrice();
        // const cartItem = new CartItem(1, null, product);
        // this.cartList.push(cartItem);
    }

    removeFromCart(id: number): void {
        debugger;
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
        return this.cartList.reduce((prev, current) => prev + current.price, 0);
    }

    isEmptyCart(): boolean {
        return this.cartList.length === 0;
    }

}
