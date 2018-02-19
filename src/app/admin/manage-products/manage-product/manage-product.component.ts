import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnInit } from '@angular/core';

import { Product } from './../../../products/models/product.model';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageProductComponent implements OnInit {

  @Input() product: Product;
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {

  }

  editProduct() {
    this.edit.emit(this.product);
  }
  deleteProduct() {
    this.delete.emit(this.product);
  }


}