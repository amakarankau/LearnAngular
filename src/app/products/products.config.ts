import { InjectionToken } from '@angular/core';

const productsBaseUrl = 'http://localhost:3000/products';
export const ProductsAPI = new InjectionToken<string>('ProductsAPI');

export const ProductsAPIProvider = {
    provide: ProductsAPI,
    useValue: productsBaseUrl
};