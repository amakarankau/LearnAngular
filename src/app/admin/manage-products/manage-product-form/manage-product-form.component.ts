import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProductService, Product } from '../../../products';

@Component({
  selector: 'app-manage-product-form',
  templateUrl: './manage-product-form.component.html',
  styleUrls: ['./manage-product-form.component.css']
})
export class ManageProductFormComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.product = new Product(null, '', '', null, '', '', '', null, null);
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productService.getProductById(id)
      .then(product => {
        if (!!product) {
          this.product = product;
        }
      })
      .catch(err => console.log(err));
  }

  saveProduct() {
    const product = this.product;

    if (this.route.snapshot.url[1].toString() === 'add') {
      this.productService.addProduct(product);
    } else {
      this.productService.updateProduct(product);
    }
    this.router.navigate(['/admin/products']);
  }

  goBack() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
