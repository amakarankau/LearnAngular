import { ICartItem } from './cart-item';
import { Product } from '../../products/product/entity/product-model';

export class CartItem implements ICartItem {

    public price: number;

    constructor(
        public product: Product,
        public quantity: number,
        ) {
        this.quantity = quantity;
        this.price = product.price;
    }
}
