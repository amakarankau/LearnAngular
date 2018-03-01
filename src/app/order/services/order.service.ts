import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../../products/models/product.model';
import { Order } from '../models/order.model';
import { OrderRecord } from '../models';



@Injectable()
export class OrderService {

    orders: Order[] = [new Order(1, [new OrderRecord(2, 5), new OrderRecord(4, 2)], 'Address1 street 1 home 1', '+3752598547', false, false, 34.2), new Order(2, [new OrderRecord(1, 3)], 'Address2 street 2 home 2', '+3752538547', false, false, 87.32), new Order(3, [new OrderRecord(7, 2), new OrderRecord(10, 1)], 'Address3 street 3 home 3', '+3754598547', false, false, 43.01)];

    getOrders() {
        return this.orders;
    }

    deleteOrder(order: Order) {
        const i = this.orders.findIndex(u => u.orderId === order.orderId);
        if (i > -1) {
            this.orders.splice(i, 1);
        }
        console.log('delete');
    }


    confirmByAdmin(order: Order) {
        order.confirmedByAdmin = true;
        console.log('confirm by admin');
    }
}

