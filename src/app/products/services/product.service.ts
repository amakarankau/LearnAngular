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
  new Product(1, 'Product1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      4.44, false, 1000),
      new Product(2, 'Product2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      3.33, true, 1000),
      new Product(3, 'Product3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      2.22, true , 0),
      new Product(4, 'Product4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      1.11, false, 500),
];

const productsListPromise = Promise.resolve(productsList);

const productsListObservable: Observable<Array<Product>> = of(productsList);


@Injectable()
export class ProductService implements OnDestroy {
  private subscription: Subscription;
  constructor() { }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getProduct(id: number | string): Promise<Product> {
    return this.getProducts()
      .then(tasks => tasks.find(task => task.id === +id))
      .catch(() => Promise.reject('Error in getTask method'));
  }

  // getProductById(id: number): Product {
  //   let product: Product;
  //   const subscription = this.getProducts()(result => {
  //     product = result.find((i) => i.id === id);
  //   });
  //   return product;
  // }

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

  getProducts1(): Array<Product> {
    return productsList;
  }

  getProducts(): Promise<Product[]> {
    return productsListPromise;
  }

}


