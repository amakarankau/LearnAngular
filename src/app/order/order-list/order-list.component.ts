import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Array<Order>

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  getInfo(order: Order) {
    console.log('Info');
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order);
  }

  confirmOrder(order: Order) {
    this.orderService.confirmByAdmin(order);
  }

}
