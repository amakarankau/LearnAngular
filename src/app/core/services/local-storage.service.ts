import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(itemName: string, item: any): void {
    if (typeof item === 'object') {
      item = JSON.stringify(item);
    }
    localStorage.setItem(itemName, item);
  }

  getItem(itemName: string): any {
    let item = localStorage.getItem(itemName);
    if (item) {
      if (item[0] === '{') {
        item = JSON.parse(item);
      }
    }
    return item;
  }

  removeItem(itemName: string): void {
    localStorage.removeItem(itemName);
  }

}
