import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';
import { ProductArrayService } from './../services/product-array.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';


@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  task: Product;
  constructor(
    private taskArrayService: ProductArrayService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.task = new Product(null, '', null, null);

    // it is not necessary to save subscription to route.paramMap
    // it handles automatically
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.taskArrayService.getTask(+params.get('id'))))
      .subscribe(
        task => this.task = {...task},
        err => console.log(err)
    );
  }
  saveTask() {
    const task = { ...this.task };
    if (task.id) {
      this.taskArrayService.updateTask(task);
    } else {
      this.taskArrayService.addTask(task);
    }
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
