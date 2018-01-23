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

  cartProducts: Product[] = [];
  cartItems: CartItem[] = [];
 // cartItems: Map <string, number> = new Map();

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCart();
    this.processCartDuplicates();
  }

  processCartDuplicates(): void {
    const innerCartProducts = this.cartProducts;
    const innerCartItems = this.cartItems;
    innerCartProducts.forEach(element => {
      if (innerCartItems.some(function (i) { return i.name === element.name; })) {
        const index = innerCartItems.findIndex((obj) => obj.name === element.name);
        innerCartItems[index].quantity += 1;
      } else {
        innerCartItems.push(new CartItem((element.name), 1));
      }
    });
    this.cartItems = innerCartItems;
    console.log(this.cartItems);
  }

  public getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  upQuantity(item: CartItem) {
    item.quantity++;
  }

  downQuantity(item: CartItem) {
    if (item.quantity !== 0) {
      item.quantity--;
    }
  }

}

