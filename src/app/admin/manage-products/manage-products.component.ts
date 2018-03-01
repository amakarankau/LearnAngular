import { Component, OnInit, NgZone, ApplicationRef } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError, switchMap } from 'rxjs/operators';

import { Product } from './../../products/models/product.model';
import { ProductsService } from '../../products/services/products.service';
import { OnChanges, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit, OnDestroy{
  products$: Observable<Array<Product>>;
  sub: Subscription;
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.getProducts();
  }

  addProduct() {
    const link = ['add'];
    this.router.navigate(link, { relativeTo: this.route });
  }

  editProduct(product: Product) {
    const link = ['edit', product.id];
    this.router.navigate(link, { relativeTo: this.route });
  }

  deleteProduct(product: Product) {
    this.sub = this.productsService.deleteProduct(product)
    .subscribe (
      () => this.getProducts(),
      error => console.log(error)
    );
  }

  private getProducts() {
    this.products$ = this.productsService.getProducts();
  }

}
