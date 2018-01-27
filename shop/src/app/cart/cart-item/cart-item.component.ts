import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './index';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() public currentItem: CartItem;

  @Output() public increase: EventEmitter<{}> = new EventEmitter();
  @Output() public decrease: EventEmitter<{}> = new EventEmitter();
  @Output() public remove: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  upQuantity(): void {
    this.increase.emit(this.currentItem);
  }

  downQuantity(): void {
    this.decrease.emit(this.currentItem);
  }

  removeFromCart(): void {
    this.remove.emit(this.currentItem);
  }

  ngOnInit() {
  }

}
