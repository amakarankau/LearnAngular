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

}

