import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  alphabet: string[][] = [['a', 'z'], ['A', 'Z'], ['0', '9']];
  constructor() { }

  getString(length) {
    let str = '';
    while (length--) {
      const rangeNumber = Math.floor(Math.random() * this.alphabet.length);
      const minForRange = this.alphabet[rangeNumber][0].charCodeAt(0),
          maxForRange = this.alphabet[rangeNumber][1].charCodeAt(0);
      const c = Math.floor(Math.random() * (maxForRange - minForRange + 1)) + minForRange;
      str += String.fromCharCode(c);
    }
    console.log(str);
  }
}
