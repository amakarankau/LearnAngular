import { Injectable } from '@angular/core';

import { Product } from '../../products/product/entity/product-model';
import { CartItem } from '../cart-item/index';

@Injectable()
export class CartService {

    cartList: CartItem[] = [];

    constructor() { }

    getCart (): CartItem[] {
        return this.cartList;
    }

    addToCart(product: Product, quantity?: number) {
        const cart = this.cartList;
        let item = cart.find((p) => p.product.id === product.id);
        if (item === undefined) {
          item = new CartItem(product, quantity || 1);
          cart.push(item);
        } else {
            item.quantity += quantity || 1;
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
