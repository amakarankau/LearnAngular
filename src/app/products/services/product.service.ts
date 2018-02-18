// import { Injectable } from '@angular/core';
// import { Product } from '../models/product.model';
// const taskList = [
//   new Product(1, 'Estimate', 1, 8, 8, true),
//   new Product(2, 'Create', 2, 8, 4, false),
//   new Product(3, 'Deploy', 3, 8, 0, false)
// ];

// const taskListPromise = Promise.resolve(taskList);
// @Injectable()
// export class ProductService {
//   getTasks(): Promise<Product[]> {
//     return taskListPromise;
//   }
//   getTask(id: number | string): Promise<Product> {
//     return this.getTasks()
//       .then(tasks => tasks.find(task => task.id === +id))
//       .catch(() => Promise.reject('Error in getTask method'));
//   }
//   addTask(task: Product): void {
//     taskList.push(task);
//   }
//   updateTask(task: Product): void {
//     let i = -1;
//     taskList.forEach((item, index) => {
//       if (item.id === task.id) {
//         i = index;
//         return false;
//       }
//     });
//     if (i > -1) {
//       taskList.splice(i, 1, task);
//     }
//   }
//   completeTask(task: Product): void {
//     task.done = true;
//   }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


import { Product } from '../models/product.model';
// import { Category } from './product/entity/category';
// import { Ingredient } from './product/entity/ingredients';
// import { Equivalent } from './product/entity/equivalents';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

const productsList: Array<Product> = [
  new Product(1, 'Томат, 1кг', 'Класс 1. Сорт F-190.', 2.99, 'Турция', false, 1000),
  new Product(2, 'Перец красный, 1 кг.', 'Сорт Калифорния ред.', 7.85, 'Голландия', false, 1000),
  new Product(3, 'Капуста белокочанная 1 кг.', 'Урожай 2017 г.', 0.45, 'Беларусь', false, 1000),
  new Product(4, 'Морковь свежая 1 кг.', 'Не мытая', 0.59, 'Беларусь', false, 1000),
  new Product(5, 'Чеснок 1 кг.', 'содержание клетчатки в 100 г продукта 2.1 г.', 4.99, 'Китай', false, 1000),
  new Product(6, 'Томат «Слива» 1 кг.', 'Класс 1', 3.59, 'Украина', false, 1000),
  new Product(8, 'Капуста ранняя 1 кг.', 'Сорт Парел.', 1.09, 'Македония', false, 1000),
  new Product(7, 'Томат черри сливка 250 г.', 'Сорт Daniela, категория 1.', 2.99, 'Египет', false, 1000),
  new Product(9, 'Капуста пекинская, 1 кг.', 'Сорт Билко.', 1.65, 'Польша', false, 1000),
  new Product(10, 'Лук репчатый, 1кг.', 'Сорт 1. Урожай: 2017 года.', 0.49, 'Беларусь', false, 1000),
  new Product(11, 'Свекла 1 кг.', 'Урожай 2017 года.', 0.68, 'Беларусь', false, 1000),
  new Product(12, 'Сельдерей стеблевой, 1 кг.', '1 категория.', 3.25, 'Польша', false, 1000),
  new Product(13, 'Имбирь 1 кг.', 'Класс 1.', 6.99, 'Китай', false, 1000),
  new Product(14, 'Картофель свежий, 1 кг.', 'Урожай 2017 г.', 0.79, 'Беларусь', false, 1000),
  new Product(15, 'Перец чили 1 кг.', '1 категория.', 10.99, 'Польша', false, 1000),
];

// const productsListPromise = Promise.resolve(productsList);

// const productsListObservable: Observable<Array<Product>> = of(productsList);


@Injectable()
export class ProductService implements OnDestroy {
  private subscription: Subscription;
  constructor() { }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // getProduct(id: number | string): Promise<Product> {
  //   return this.getProducts()
  //     .then(tasks => tasks.find(task => task.id === +id))
  //     .catch(() => Promise.reject('Error in getTask method'));
  // }

  getProductById(id: number): Product {
    return this.getProducts().find((i) => i.id === id);
  }

  // getProducts(): Observable<Product[]> {
  //   return productsListObservable;
  // }

  addProduct(task: Product): void {
    productsList.push(task);
  }

  updateProduct(task: Product): void {
    let i = -1;
    productsList.forEach((item, index) => {
      if (item.id === task.id) {
        i = index;
        return false;
      }
    });
    if (i > -1) {
      productsList.splice(i, 1, task);
    }
  }

  getProducts(): Array<Product> {
    return productsList;
  }
}


