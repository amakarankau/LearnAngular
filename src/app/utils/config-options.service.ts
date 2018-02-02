import { Injectable } from '@angular/core';

const CONSTANT: object = {
  App: 'Shop Application',
  Ver: '1.0',
  Author: 'Aliaksei M',
  Service: 'Config Options Service'
};


@Injectable()
export class ConfigOptionsService {

  private configMap: Map<string, any> = new Map();

  constructor() { }

  static get CONSTANT() {
    return CONSTANT;
  }

  setToConfig(key: string, value: any) {
    this.configMap.set(key, value);
  }

  getFromConfig(key: string) {
    this.configMap.get(key);
  }

  getConfig() {
    return this.configMap;
  }

  getServiceName() {
    console.log('useValue: Config Service');
  }

  printConfig() {
    this.configMap.forEach((value, key) => console.log(`${key} => ${value}`));
  }
}
