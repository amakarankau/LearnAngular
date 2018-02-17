import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter  } from '@angular/core';

import { CartItem } from './../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
  @Output() edit = new EventEmitter<CartItem>();

  editCartItem() {
    this.edit.emit(this.cartItem);
  }
}

