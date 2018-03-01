import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';

import { Product } from '../../products/models/product.model';
import { OrderRecord } from '../models';
import { Order } from '../models/order.model';
import { OrdersAPI } from '../orders.config';

// rxjs
@Injectable()
export class OrderService {

    constructor(
        private http: HttpClient,
        @Inject(OrdersAPI) private ordersUrl: string
    ) { }


    orders: Order[] = [new Order(1, [new OrderRecord(2, 5), new OrderRecord(4, 2)], 'Address1 street 1 home 1', '+3752598547', false, false, 34.2), new Order(2, [new OrderRecord(1, 3)], 'Address2 street 2 home 2', '+3752538547', false, false, 87.32), new Order(3, [new OrderRecord(7, 2), new OrderRecord(10, 1)], 'Address3 street 3 home 3', '+3754598547', false, false, 43.01)];

    getOrders(): Observable<Order[]> {
        return this.http.get(this.ordersUrl)
            .pipe(
                map(this.handleData),
                catchError(this.handleError)
            );
    }

    deleteOrder(order: Order) {
        const i = this.orders.findIndex(u => u.id === order.id);
        if (i > -1) {
            this.orders.splice(i, 1);
        }
        console.log('delete');
    }


    confirmByAdmin(order: Order): Observable<Order> {
        order.confirmedByAdmin = true;
        return this.updateOrder(order);
    }

    updateOrder(order: Order): Observable<Order> {
        const url = `${this.ordersUrl}/${order.id}`,
            body = JSON.stringify(order),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        return this.http
            .put(url, body, options)
            .pipe(
                map(this.handleData),
                catchError(this.handleError)
            );
    }

    createOrder(order: Order): Observable<Order> {
        const url = this.ordersUrl,
            body = JSON.stringify(order),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        return this.http
            .post(url, body, options)
            .pipe(
                map(this.handleData),
                catchError(this.handleError)
            );
    }


    private handleData(response: HttpResponse<Product>) {
        const body = response;
        return body || {};
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage: string;

        // A client-side or network error occurred.
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        else {
            errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        }

        console.error(errorMessage);
        return _throw(errorMessage);
    }

}

