import { Component, OnInit, NgZone, ApplicationRef } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError, switchMap } from 'rxjs/operators';

import { Product } from './../../products/models/product.model';
import { ProductsService } from '../../products/services/products.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit, OnChanges{
  products$: Observable<Array<Product>>;
  products: Array<Product>;
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

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
    this.productsService.deleteProduct(product);
  }
  
  private getProducts() {
    this.products$ = this.productsService.getProducts();
  }

  ngOnChanges() {
    debugger;
    this.getProducts();
  }


}
