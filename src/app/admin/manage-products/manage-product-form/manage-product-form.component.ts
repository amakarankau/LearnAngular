import { Observable } from 'rxjs/Observable';
import { ProductsService } from './../../../products/services/products.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../../products';

@Component({
  selector: 'app-manage-product-form',
  templateUrl: './manage-product-form.component.html',
  styleUrls: ['./manage-product-form.component.css']
})
export class ManageProductFormComponent implements OnInit {

  product: Product;
  private sub: Subscription;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.product = new Product(null, '', '', null, '', '', '', null, null);
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productsService.getProduct(id).toPromise()
      .then(product => {
        if (!!product) {
          this.product = product;
        }
      })
      .catch(err => console.log(err));
  }

  ngOnDestroy(): void {
    if (this.sub) {
       this.sub.unsubscribe();
    }
}

  saveProduct() {
    const product = this.product;
    const method = product.id ? 'updateProduct' : 'createProduct';
    this.sub = this.productsService[method](product)
      .subscribe(
        () => {
          product.id
            ? this.router.navigate(['/admin/products', { editedProductID: product.id }])
            : this.goBack();
        },
        error => console.log(error)
      );
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
