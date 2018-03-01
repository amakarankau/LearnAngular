import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Product } from '../../products/models/product.model';
import { OrderRecord } from '../models';
import { Order } from '../models/order.model';
import { OrdersAPI } from '../orders.config';

@Injectable()
export class OrderService {

    constructor(
        private http: HttpClient,
        @Inject(OrdersAPI) private ordersUrl: string
    ) { }

    getOrders(): Observable<Order[]> {
        return this.http.get(this.ordersUrl)
            .pipe(
                map(this.handleData),
                catchError(this.handleError)
            );
    }

    deleteOrder(order: Order): Observable<Order[]> {
        return this.http.delete(`${this.ordersUrl}/${order.id}`)
            .pipe(
                switchMap(() => this.getOrders())
            );
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

