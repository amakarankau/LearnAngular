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
  @Input() public bookmarkStyle: string;
  @Output() public event: EventEmitter<{}> = new EventEmitter();

  constructor (private cartService: CartService) {

  }

  addToCart(): void {
    if (!this.isOutOfStock()) {
     this.cartService.addToCart(this.prod);
    }
  }

  isOutOfStock(): boolean {
    return this.prod.inStock <= 0;
  }

  public toggleBookmarkStyle(): void {
    this.prod.isBookmarked = !this.prod.isBookmarked;
    if (this.bookmarkStyle === 'bookmark') {
      this.bookmarkStyle = 'bookmark_active';
    } else {
      this.bookmarkStyle = 'bookmark';
    }
    console.log(this.prod.isBookmarked);
  }

  public ngOnInit (): void {
    this.bookmarkStyle = this.prod.isBookmarked ? 'bookmark_active' : 'bookmark';
  }
}
