import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(list: any[], sortField: string, ascFlag?: boolean): any[] {
    let sortedList = [];
    if (sortField === 'quantity') {
      sortedList =  list.sort(this.compareByQuantity);
    } else if (sortField === 'price') {
      sortedList = list.sort(this.compareByPrice);
    } else {
      sortedList = list.sort(this.compareByName);
    }
    if (ascFlag) {
      sortedList.reverse();
    }
    return sortedList;
  }
  public compareByPrice(a: any, b: any): number {
    if (a.price < b.price) { return -1; }
    if (a.price > b.price) { return 1; }
    return 0;
  }
  public compareByName(a: any, b: any): number {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  }
  public compareByQuantity(a: any, b: any): number {
    if (a.quantity < b.quantity) { return -1; }
    if (a.quantity > b.quantity) { return 1; }
    return 0;
  }

  // https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/

  // const bands = [ 
  //   { genre: 'Rap', band: 'Migos', albums: 2},
  //   { genre: 'Pop', band: 'Coldplay', albums: 4, awards: 13},
  //   { genre: 'Rock', band: 'Breaking Benjamins', albums: 1}
  // ];
  
  // // function for dynamic sorting
  // function compareValues(key, order='asc') {
  //   return function(a, b) {
  //     if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
  //       // property doesn't exist on either object
  //         return 0; 
  //     }
  
  //     const varA = (typeof a[key] === 'string') ? 
  //       a[key].toUpperCase() : a[key];
  //     const varB = (typeof b[key] === 'string') ? 
  //       b[key].toUpperCase() : b[key];
  
  //     let comparison = 0;
  //     if (varA > varB) {
  //       comparison = 1;
  //     } else if (varA < varB) {
  //       comparison = -1;
  //     }
  //     return (
  //       (order == 'desc') ? (comparison * -1) : comparison
  //     );
  //   };
  // }
  // And this is how you’d use it:
  
  // // array is sorted by band, in ascending order by default
  // bands.sort(compareValues('band')); 
  
  // // array is sorted by band in descending order
  // bands.sort(compareValues('band', 'desc')); 
  
  // // array is sorted by albums in ascending order
  // bands.sort(compareValues('albums'));

}

