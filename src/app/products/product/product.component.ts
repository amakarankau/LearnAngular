import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../../cart/index';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() inStockColor: string;
  @Input() productQuantity: number;
  @Input() prod: Product;
  @Input() bookmarkStyle: string;

  @Output() event: EventEmitter<{}> = new EventEmitter();

  constructor (private cartService: CartService) {}

  ngOnInit (): void {
    this.bookmarkStyle = this.prod.isBookmarked ? 'bookmark_active' : 'bookmark';
    this.prod.inStock > 0 ? this.inStockColor = 'green' : this.inStockColor = 'red';
  }

  addToCart(): void {
    if (!this.isOutOfStock()) {
      debugger;
     this.cartService.addToCart(this.prod, this.productQuantity);
    }
  }

  isOutOfStock(): boolean {
    return this.prod.inStock <= 0;
  }

  toggleBookmarkStyle(): void {
    this.prod.isBookmarked = !this.prod.isBookmarked;
    if (this.bookmarkStyle === 'bookmark') {
      this.bookmarkStyle = 'bookmark_active';
    } else {
      this.bookmarkStyle = 'bookmark';
    }
    console.log(this.prod.isBookmarked);
  }
}
