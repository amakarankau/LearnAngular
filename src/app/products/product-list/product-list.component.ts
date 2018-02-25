import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';
import { LocalStorageService } from './../../core/services/local-storage.service';
import { ProductsService } from './../services/products.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Array<Product>>;
  products: Array<Product>;

  constructor( private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts().catch(err => console.log(err));

  }

  private async getProducts() {
    this.products$ = this.productsService.getProducts();

  }

  getInfo(product: Product) {
    this.localStorageService.setItem('from', 'products');
    const link = ['/cart/info', product.id];
    this.router.navigate(link);
  }


}
