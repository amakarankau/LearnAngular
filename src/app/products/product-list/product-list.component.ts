import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  constructor(
    private router: Router,
    private productService: ProductService) { }
  ngOnInit() {
    this.getProducts().catch(err => console.log(err));

  }
  // completeTask(task: Product): void {
  //   this.taskArrayService.completeTask(task);
  // }
  // editTask(task: Product) {
  //   const link = ['/edit', task.id];
  //   this.router.navigate(link);
  //   }
  private async getProducts() {
    this.products = await this.productService.getProducts();
  }
}
