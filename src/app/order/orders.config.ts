import { InjectionToken } from '@angular/core';

const ordersBaseUrl = 'http://localhost:3000/orders';
export const OrdersAPI = new InjectionToken<string>('OrdersAPI');

export const OrdersAPIProvider = {
    provide: OrdersAPI,
    useValue: ordersBaseUrl
};