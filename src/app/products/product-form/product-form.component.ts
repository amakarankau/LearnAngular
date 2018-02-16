import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.product = new Product(null, '',  '', null,  null, null);

    // it is not necessary to save subscription to route.paramMap
    // it handles automatically
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productService.getProduct(+params.get('id'))))
      .subscribe(
        product => this.product = {...product},
        err => console.log(err)
    );
  }
  saveProduct() {
    const product = { ...this.product };
    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      this.productService.addProduct(product);
    }
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
