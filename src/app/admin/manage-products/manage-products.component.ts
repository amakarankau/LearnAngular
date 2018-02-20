import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { catchError, switchMap } from 'rxjs/operators';


import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../products';
import { Product } from './../../products/models/product.model';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Array<Product>;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getProducts().catch(err => console.log(err));
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
    this.productService.deleteProduct(product.id);
  }
  private async getProducts() {
    this.products = await this.productService.getProducts();
  }

}
