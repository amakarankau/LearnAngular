import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(list: any[], sortField: string, ascFlag?: string): any[] {
    const a =  list.sort(this.compareValues(sortField, ascFlag));
    return a;
  }

   compareValues(sortField, ascFlag) {
    return function(a, b) {
      const varA = (sortField === 'name') ?
        a.product.name : a[sortField];
      const varB = (sortField === 'name') ?
        b.product.name : b[sortField];

      let comparison = 0;
      if (varA < varB) {
        comparison = 1;
      } else if (varA > varB) {
        comparison = -1;
      }
      return (
        (ascFlag === 'asc') ? (comparison * -1) : comparison
      );
    };
  }
}

