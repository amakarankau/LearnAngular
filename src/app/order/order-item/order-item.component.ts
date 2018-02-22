import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() orderStyle:string;
  @Input() order: Order;

  @Output() info = new EventEmitter<Order>();
  @Output() confirm = new EventEmitter<Order>();
  @Output() delete = new EventEmitter<Order>();

  constructor( private orderService: OrderService) { }

  ngOnInit() {
    this.orderStyle = 'notConfirmed';
    // this.order= new Order(null, [], '', '', false, false);
  }


  getOrderInfo() {
    this.info.emit(this.order);
  }

  confirmByAdmin() {
    this.orderStyle = 'confirmed'
    this.confirm.emit(this.order);
  }

  deleteOrder() {
    this.delete.emit(this.order);
  }


}
