import { Product } from '../../products/models/product.model';

export class CartItem {

    public price: number;

    constructor(
        public product: Product,
        public quantity: number,
        ) {
        this.quantity = quantity;
        this.price = product.price;
    }
}
