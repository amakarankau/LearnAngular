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
        public isAvailable: boolean,
        public ingredients: Ingredient[],
        public equivalents: Equivalent[],
        public inStock: number
       ) {
         this.id = id;
         this.name = name;
         this.description = description;
         this.price = price;
         this.category = category;
         this.isAvailable = isAvailable;
         this.ingredients = ingredients;
         this.equivalents = equivalents;
         this.inStock = inStock;
       }
}
