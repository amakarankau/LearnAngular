import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,  private router: Router) { }

  isEmptyCart(): boolean {
    return this.cartService.isEmptyCart();
  }

  showCart(): void {
    this.router.navigate(['/cartList']);
  }

  ngOnInit(): void {
  }

}
