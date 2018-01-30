import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding, ElementRef, Renderer, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { CartItem } from './cart-item.model';

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
    // this.isHovered = true;
    // const itemContainer = this.el.nativeElement.querySelector('.item-container');
    // this.renderer.setElementStyle(itemContainer, 'background-color', 'whitesmoke');
  // this.renderer.setElementProperty(itemContainer, '[ngStyle]', '{background-color: blue}');
  //  this.renderer.setElementAttribute(itemContainer, 'class', 'selected');
  }

  @HostListener('mouseout') onMouseOut() {
    this.selectedClass = 'unSelected';
    // this.isHovered = false;
    // const itemContainer = this.el.nativeElement.querySelector('.item-container');
    // this.renderer.setElementStyle(itemContainer, 'background-color', 'white');
    // this.renderer.setElementProperty(itemContainer, 'ngStyle', 'selected');
    // this.renderer.setElementAttribute(itemContainer, 'class', 'unSelected');
  }

  constructor(private el: ElementRef,  private renderer: Renderer) { }

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
}