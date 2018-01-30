import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { OnChanges, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { CartService } from '../cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Product } from '../../products/product/entity/product-model';
import { CartItem } from '../cart-item/cart-item.model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild(CartItemComponent)
  private appCart: CartItemComponent;

  @ViewChild('testChild')
  private testChild: ElementRef;

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
     this.cartItems = this.cartService.getCart();
  }

  ngOnChanges() {
    this.getTotalPrice();
  }

  ngAfterViewInit() {
    console.log('Get ViewChild by # ' + (<HTMLInputElement>this.testChild.nativeElement).innerText);
    this.appCart.childMethodCalledFromParent();
  }

  removeFromCart(item: CartItem) {
    const currentItems = [...this.cartItems];
    const itemsWithoutRemoved = currentItems.filter(i => i.product.id !== item.product.id);
    this.cartItems = itemsWithoutRemoved;
    this.cartService.updateCartContent(this.cartItems);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  upQuantity(item: CartItem) {
    if (item.product.inStock > 0 ) {
      item.quantity++;
      item.product.inStock--;
    }
  }

  downQuantity(item: CartItem) {
    if (item.quantity !== 0) {
      item.quantity--;
      item.product.inStock++;
    }
  }

}

