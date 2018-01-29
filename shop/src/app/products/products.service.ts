import { Injectable } from '@angular/core';

import { Product } from './product/entity/product-model';
import { Category } from './product/entity/category';
import { Ingredient } from './product/entity/ingredients';
import { Equivalent } from './product/entity/equivalents';

@Injectable()
export class ProductsService {

  constructor() { }

  getProductById(id: number): Product {
    return this.getProducts().find((i) => i.id === id);
  }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Product1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      1.11, Category.Category1, false, [Ingredient.Ingredient1, Ingredient.Ingredient3], [Equivalent.Equivalent1], 1000),
      new Product(2, 'Product2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      2.22, Category.Category2, true, [Ingredient.Ingredient2, Ingredient.Ingredient4], [Equivalent.Equivalent2], 1000),
      new Product(3, 'Product3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      3.33, Category.Category3, true, [Ingredient.Ingredient5], [Equivalent.Equivalent3], 0),
      new Product(4, 'Product4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip \
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      4.44, Category.Category3, false, [Ingredient.Ingredient3, Ingredient.Ingredient4], [Equivalent.Equivalent2], 500),
    ];
  }
}

