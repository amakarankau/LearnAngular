import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../product/products.service';
import { Product } from '../product/product-model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() public productComponent: ProductComponent;

  products: Product[];

  constructor(private productsService: ProductsService) { 

  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

}
