import { ICartItem } from './cart-item';

export class CartItem implements ICartItem {
    constructor(
        public name: string,
        public quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}
