import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';
import { ProductArrayService } from './../services/product-array.service';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  tasks: Array<Product>;
  constructor(
    private router: Router,
    private taskArrayService: ProductArrayService) { }
  ngOnInit() {
    this.getTasks().catch(err => console.log(err));

  }
  completeTask(task: Product): void {
    this.taskArrayService.completeTask(task);
  }
  editTask(task: Product) {
    const link = ['/edit', task.id];
    this.router.navigate(link);
    }
  private async getTasks() {
    this.tasks = await this.taskArrayService.getTasks();
  }
}
