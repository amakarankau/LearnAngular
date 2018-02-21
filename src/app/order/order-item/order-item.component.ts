import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {


  order: Order;

  constructor( private orderService: OrderService) { }

  ngOnInit() {
    this.order= new Order(null, [], '', '', false, false);
  }


  getOrderInfo() {

  }

  confirmByAdmin() {
  }

  deleteOrder() {
  }


}
