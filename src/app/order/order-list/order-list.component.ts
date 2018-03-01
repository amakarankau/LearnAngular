import { Observable } from 'rxjs/Observable';
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders$: Observable<Array<Order>>;
  private sub: Subscription;

  constructor(private orderService: OrderService, private router: Router ) { }

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }

  getInfo(order: Order) {
    console.log('Info');
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order);
  }

  confirmOrder(order: Order) {
    this.sub = this.orderService.confirmByAdmin(order)
    .subscribe(
      () => { this.router.navigate(['/admin/orders'])
      },
      error => console.log(error)
    );
  }
}
