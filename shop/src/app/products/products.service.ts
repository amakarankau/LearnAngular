import { Injectable } from '@angular/core';

import { Product } from './product/entity/product-model';
import { Category } from './product/entity/category';
import { Ingredient } from './product/entity/ingredients';
import { Equivalent } from './product/entity/equivalents';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Name1', 'description1', 1.11, Category.Category1, true,
      [Ingredient.Ingredient1, Ingredient.Ingredient3], [Equivalent.Equivalent1], 1000),
      new Product(2, 'Name2', 'description2', 2.22, Category.Category2, true,
      [Ingredient.Ingredient2, Ingredient.Ingredient4], [Equivalent.Equivalent2], 1000),
      new Product(3, 'Name3', 'description3', 3.33, Category.Category3, true,
      [Ingredient.Ingredient5], [Equivalent.Equivalent3], 0),
    ];
  }
}

