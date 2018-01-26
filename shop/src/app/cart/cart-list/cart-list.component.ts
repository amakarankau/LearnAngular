import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { CartService } from '../cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Product } from '../../products/product/entity/product-model';
import { CartItem } from '../cart-item/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  // cartProducts: Product[] = [];
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
     this.cartItems = this.cartService.getCart();

  }

  // processCartDuplicates(): void {
  //   this.cartProducts.forEach(element => {
  //     if (this.cartItems.some(function (i) { return i.id === element.id; })) {
  //       const index = this.cartItems.findIndex((obj) => obj.id === element.id);
  //       this.cartItems[index].quantity += 1;
  //     } else {
  //       this.cartItems.push(new CartItem((element.id), 1));
  //     }
  //   });
  //   console.log(this.cartItems);
  // }

  public removeFromCart(item: CartItem) {
    const currentItems = [...this.cartItems];
    const itemsWithoutRemoved = currentItems.filter(i => i.product.id !== item.product.id);
    this.cartItems = itemsWithoutRemoved;
  }

  public getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  upQuantity(item: CartItem) {
    // add if with inStock value
     item.quantity++;
  }

  downQuantity(item: CartItem) {
    if (item.quantity !== 0) {
      item.quantity--;
    }
  }



}

