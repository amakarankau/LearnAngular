import { Category } from './category';
import { Ingredient } from './ingredients';
import { Equivalent } from './equivalents';

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isBookmarked: boolean;
    ingredients: Ingredient[];
    equivalents: Equivalent[];
    inStock: number;
  }
