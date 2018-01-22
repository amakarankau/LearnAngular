import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

import { Product } from './entity/product-model';
import { ProductsService } from '../products.service';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() public prod: Product;
  @Output() public event: EventEmitter<{}> = new EventEmitter();

  constructor (private cartService: CartService) {

  }

  addToCart(): void {
    this.cartService.addToCart(this.prod);
  }

  ngOnInit(): void {
  }
}
