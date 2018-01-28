import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  public selectedClass = 'unSelected';

  @Input() public currentItem: CartItem;

  @Output() public increase: EventEmitter<{}> = new EventEmitter();
  @Output() public decrease: EventEmitter<{}> = new EventEmitter();
  @Output() public remove: EventEmitter<{}> = new EventEmitter();


  @HostListener('mouseover') onMouseOver() {
    this.selectedClass = 'selected';

    // const itemContainer = this.el.nativeElement.querySelector('.item-container');
    // this.renderer.setElementStyle(itemContainer, 'background-color', 'whitesmoke');
  // this.renderer.setElementProperty(itemContainer, '[ngStyle]', '{background-color: blue}');
  //  this.renderer.setElementAttribute(itemContainer, 'class', 'selected');
  }

  @HostListener('mouseout') onMouseOut() {
    this.selectedClass = 'unSelected';

    // const itemContainer = this.el.nativeElement.querySelector('.item-container');
    // this.renderer.setElementStyle(itemContainer, 'background-color', 'white');
    // this.renderer.setElementProperty(itemContainer, 'ngStyle', 'selected');
    // this.renderer.setElementAttribute(itemContainer, 'class', 'unSelected');
  }

  constructor(private el: ElementRef,  private renderer: Renderer) { }

  plusOne(): void {
    this.increase.emit(this.currentItem);
  }

  minusOne(): void {
    this.decrease.emit(this.currentItem);
  }

  removeFromCart(): void {
    this.remove.emit(this.currentItem);
  }

  ngOnInit() {
  }

}
