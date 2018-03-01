import { Component, Input, Output, EventEmitter, OnInit, ApplicationRef } from '@angular/core';

import { Product } from './../../../products';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
})
export class ManageProductComponent implements OnInit {

  @Input() product: Product;
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

    constructor(
      private applicationRef: ApplicationRef) { }

  ngOnInit() {
  }

  editProduct() {
    this.edit.emit(this.product);
  }

  deleteProduct() {
    this.applicationRef.tick();
    
    this.delete.emit(this.product);
  }


}
