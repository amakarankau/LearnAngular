import { Category } from './category';
import { Ingredient } from './ingredients';
import { Equivalent } from './equivalents';

export interface IProduct {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    ingredients: Ingredient[];
    equivalents: Equivalent[];
  }
