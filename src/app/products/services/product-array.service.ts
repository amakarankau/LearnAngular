import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
const taskList = [
  new Product(1, 'Estimate', 1, 8, 8, true),
  new Product(2, 'Create', 2, 8, 4, false),
  new Product(3, 'Deploy', 3, 8, 0, false)
];

const taskListPromise = Promise.resolve(taskList);
@Injectable()
export class ProductArrayService {
  getTasks(): Promise<Product[]> {
    return taskListPromise;
  }
  getTask(id: number | string): Promise<Product> {
    return this.getTasks()
      .then(tasks => tasks.find(task => task.id === +id))
      .catch(() => Promise.reject('Error in getTask method'));
  }
  addTask(task: Product): void {
    taskList.push(task);
  }
  updateTask(task: Product): void {
    let i = -1;
    taskList.forEach((item, index) => {
      if (item.id === task.id) {
        i = index;
        return false;
      }
    });
    if (i > -1) {
      taskList.splice(i, 1, task);
    }
  }
  completeTask(task: Product): void {
    task.done = true;
  }
}

