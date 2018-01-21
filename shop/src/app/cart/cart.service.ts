import { Injectable } from '@angular/core';

import { Product } from '../products/product/entity/product-model';

@Injectable()
export class CartService {

    cartList: Product[] = [];

    constructor() { }

    getCart (): Product[] {
        return this.cartList;
    }

    addToCart(product: Product) {
        this.cartList.push(product);
    }

    removeFromCart(name: string): void {
        const item: Product = this.cartList.find((obj) => obj.name === name);
        if (item) {
            const index: number = this.cartList.indexOf(item);
            this.cartList.splice(index, 1);
        }
    }

    isEmptyCart(): boolean {
        return this.cartList.length === 0;
    }

}
