import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from './../models/product.model';
@Component({
  selector: 'app-task',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() task: Product;

  @Output() complete = new EventEmitter<Product>();
  @Output() edit = new EventEmitter<Product>();

  completeTask(): void {
    this.complete.emit(this.task);
  }
  editTask() {
    this.edit.emit(this.task);
  }
}
