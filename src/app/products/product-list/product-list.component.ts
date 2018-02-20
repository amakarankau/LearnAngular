import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
import { LocalStorageService } from './../../core/services/local-storage.service';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor( private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }
  ngOnInit() {
    this.getProducts().catch(err => console.log(err));

  }

  private async getProducts() {
    this.products = await this.productService.getProducts();
  }

  getInfo(product: Product) {
    this.localStorageService.setItem('from', 'products');
    const link = ['/cart/info', product.id];
    this.router.navigate(link);
  }


}
