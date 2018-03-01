import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CartItem } from '../../cart/models/cart-item.model';
import { CartService } from '../../cart/services/cart.service';
import { LocalStorageService } from '../../core';
import { AuthService } from '../../core/services/auth.service';
import { Order, OrderRecord } from '../models';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
order: Order;
deliveryAddress: string;
phone: string;
sub: Subscription;
cartItems: CartItem[] = [];

  constructor( private localStorageService: LocalStorageService, private cartService: CartService,  private route: ActivatedRoute,
    private router: Router, private authService: AuthService, private orderService: OrderService) { }

  ngOnInit() {
    if (this.isLoggedAdmin()) {
      console.log('getOrderById');
    } else {
      this.order= new Order(null, [], '', '', false, false, null);
      this.cartItems = JSON.parse(this.localStorageService.getItem('cart'));
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
    this.saveOrder();
  }

  private saveOrder() {
    this.sub = this.orderService.createOrder(this.order)
      .subscribe(
        () => {
            this.goBack();
        },
        error => console.log(error)
      );
  }
}


