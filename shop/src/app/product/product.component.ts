import { Input, Component, OnInit } from '@angular/core';
import { Product } from './product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() prod: Product;

  constructor () {

  }

  ngOnInit(): void {
  }
}
