// import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter  } from '@angular/core';

// import { CartItem } from './../models/cart-item.model';

// @Component({
//   selector: 'app-cart-item',
//   templateUrl: './cart-item.component.html',
//   styleUrls: ['./cart-item.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CartItemComponent {
//   @Input() cartItem: CartItem;
//   @Output() edit = new EventEmitter<CartItem>();

//   editCartItem() {
//     this.edit.emit(this.cartItem);
//   }
// }

import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding, ElementRef, Renderer, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { CartItem } from '../models/cart-item.model';
import { LocalStorageService } from '../../core/services';
import { Product } from '../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, AfterViewInit {

  @Input() public currentItem: CartItem;
  @Input() public bookmarkStyle: string;

  @Output() public increase: EventEmitter<{}> = new EventEmitter();
  @Output() public decrease: EventEmitter<{}> = new EventEmitter();
  @Output() public remove: EventEmitter<{}> = new EventEmitter();

  @ViewChild('productName') private variableInput: ElementRef;
  @ViewChild('itemQuantity') private quantityInput: ElementRef;

  // @HostBinding('class.outlined') private isHovered: boolean;

  selectedClass = 'unSelected';

  @HostListener('mouseover') onMouseOver() {
    this.selectedClass = 'selected';
  }

  @HostListener('mouseout') onMouseOut() {
    this.selectedClass = 'unSelected';
  }

  constructor(private el: ElementRef,  private renderer: Renderer, private storageService: LocalStorageService) { }

  ngAfterViewInit() {
    this.childMethod();
  }

  ngOnInit (): void {
    this.bookmarkStyle = this.currentItem.product.isBookmarked ? 'bookmark_active' : 'bookmark';
  }

  plusOne(): void {
    this.increase.emit(this.currentItem);
  }

  minusOne(): void {
    this.decrease.emit(this.currentItem);
  }

  removeFromCart(): void {
    this.remove.emit(this.currentItem);
  }

  childMethod(): void {
    console.log('ViewChildTest - get by # ' + this.variableInput.nativeElement.innerText);
  }

  childMethodCalledFromParent(): void {
    console.log('ViewChildTest - call from Parent');
  }

  toggleBookmarkStyle(): void {
    this.currentItem.product.isBookmarked = !this.currentItem.product.isBookmarked;
    if (this.bookmarkStyle === 'bookmark') {
      this.bookmarkStyle = 'bookmark_active';
    } else {
      this.bookmarkStyle = 'bookmark';
    }
    console.log(this.currentItem.product.isBookmarked);
  }

  validateInput() {
    const input = parseInt(this.quantityInput.nativeElement.value, 10);
    if ( input < 0 || isNaN (input)) {
      this.currentItem.quantity = 0;
    }
  }

  setToStore() {
    console.log('Set item');
    this.storageService.setItem(this.currentItem.product.name, this.currentItem);
    console.log(localStorage);
   }
  getFromStore() {
    console.log('Get item');
    const item = this.storageService.getItem(this.currentItem.product.name);
    console.log(item);
  }
  removeFromStore() {
    console.log('Before remove item');
    console.log(localStorage);
    this.storageService.removeItem(this.currentItem.product.name);
    console.log('After remove item');
    console.log(localStorage);
   }


}
