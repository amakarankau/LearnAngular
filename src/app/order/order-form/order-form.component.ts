import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CartItem } from '../../cart/models/cart-item.model';
import { CartService } from './../../cart/services/cart.service';
import { LocalStorageService } from '../../core';
import { Order, OrderRecord } from './../models';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
order: Order;
deliveryAddress: string;
phone: string;

cartItems: CartItem[] = [];

  constructor( private localStorageService: LocalStorageService, private cartService: CartService,  private route: ActivatedRoute,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.isLoggedAdmin()) {
      console.log('getOrderById');
    } else {
      this.order= new Order(null, [], '', '', false, false, null);
      this.cartItems = JSON.parse(this.localStorageService.getItem('cart'));
      console.log(this.cartItems);
    }
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  confirmByCustomer() {
    this.createOrder();
    this.goBack();
  }

  confirmByAdmin() {
    this.order.confirmedByAdmin = true;
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  isLoggedAdmin() {
    return this.authService.isLoggedIn;
  }

  private createOrder() {
    this.cartItems.forEach(item => {
      let rec = new OrderRecord(item.product.id, item.quantity);
      this.order.products.push(rec)
    });
    this.order.confirmedByCustomer = true;
    this.order.deliveryAddress = this.deliveryAddress;
    this.order.phone = this.phone;
    console.log(this.order);
  }

}


