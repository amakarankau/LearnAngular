import { Category } from './category';
import { Ingredient } from './ingredients';
import { Equivalent } from './equivalents';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean,
        public ingredients: Ingredient[],
        public equivalents: Equivalent[],
       ) {
         this.name = name;
         this.description = description;
         this.price = price;
         this.category = category;
         this.isAvailable = isAvailable;
         this.ingredients = ingredients;
         this.equivalents = equivalents;
       }
}