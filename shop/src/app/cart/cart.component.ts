import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  isEmptyCart(): boolean {
    return this.cartService.isEmptyCart();
  }

  ngOnInit(): void {
  }

}
