import { Product } from '../../products/product/entity/product-model';

export interface ICartItem {
    product: Product;
    quantity: number;

}
