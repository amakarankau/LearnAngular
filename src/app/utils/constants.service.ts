import { Injectable } from '@angular/core';

const CONSTANT: object = {
  App: 'Shop Application',
  Ver: '1.0',
  Author: 'Aliaksei M',
  Service: 'Constant Service'
};

@Injectable()
export class ConstantsService {

 constructor() { }

  static get CONSTANT() {
    return CONSTANT;
  }

  getServiceName() {
    console.log('useValue: Constants Service');
  }

}
