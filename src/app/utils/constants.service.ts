import { Injectable } from '@angular/core';

const CONSTANT: object = {
  App: 'Shop Application',
  Ver: '1.0',
  Author: 'Aliaksei M'
};

@Injectable()
export class ConstantsService {

 constructor() { }

  static get CONSTANT() {
    return CONSTANT;
  }

}
