export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public countryOfOrigin: string,
        // public category: Category,
        public isBookmarked: boolean,

        public inStock: number
       ) { }
}
