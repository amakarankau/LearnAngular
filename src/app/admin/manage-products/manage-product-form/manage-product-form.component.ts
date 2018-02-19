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
    debugger;
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productService.getProductById(id)
      .then(product => {
        debugger;
        this.product = product;
      })
      .catch(err => console.log(err));
  }

  saveProduct() {
    debugger;
    const product = { ...this.product };

    if (product.id) {
      this.productService.updateProduct(product);
      this.router.navigate(['/admin/products']);
    } else {
      this.productService.addProduct(product);
      this.goBack();
    }
  }
  goBack() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
