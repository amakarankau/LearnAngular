import { Subscription } from 'rxjs/Subscription';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Product } from './../models/product.model';
import { ProductsAPI } from '../products.config';

@Injectable()
export class ProductsService {
sub: Subscription;

    constructor(
        private http: HttpClient,
        @Inject(ProductsAPI) private productsUrl: string
    ) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productsUrl)
            .pipe(
                map(this.handleData),
                catchError(this.handleError)
            );
    }

    getProduct(id: number): Observable<Product> {
        return this.http.get(`${this.productsUrl}/${id}`)
            .pipe(
                map(this.handleData),
                catchError(this.handleError)
            );
    }


    updateProduct(product: Product): Observable<Product> {
        const url = `${this.productsUrl}/${product.id}`,
            body = JSON.stringify(product),
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


    createProduct(product: Product): Observable<Product> {
        const url = this.productsUrl,
            body = JSON.stringify(product),
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

    deleteProduct(product: Product): Observable<Product[]> {
        return this.http.delete(`${this.productsUrl}/${product.id}`)
            .pipe(
                switchMap(() => this.getProducts())
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