import { Category } from './category';
import { Ingredient } from './ingredients';
import { Equivalent } from './equivalents';
import { IProduct } from './product';

export class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isBookmarked: boolean,
        public ingredients: Ingredient[],
        public equivalents: Equivalent[],
        public inStock: number
       ) { }
}
