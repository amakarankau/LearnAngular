import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders$: Observable<Array<Order>>;
  private sub: Subscription;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.getActualOrders();
  }

  getInfo(order: Order) {
    console.log('Info');
  }

  deleteOrder(order: Order) {
    this.sub = this.orderService.deleteOrder(order)
      .subscribe(
        () => {
          this.getActualOrders();
        },
        error => console.log(error)
      );
  }

  confirmOrder(order: Order) {
    this.sub = this.orderService.confirmByAdmin(order)
      .subscribe(
        () => {
          this.router.navigate(['/admin/orders'])
        },
        error => console.log(error)
      );
  }
  
  private getActualOrders(): void {
    this.orders$ = this.orderService.getOrders();
  }

}
