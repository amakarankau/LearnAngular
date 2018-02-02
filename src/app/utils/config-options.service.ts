import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {

  private configMap: Map<string, any> = new Map();

  constructor() { }

  setToConfig(key: string, value: any) {
    this.configMap.set(key, value);
  }

  getFromConfig(key: string) {
    this.configMap.get(key);
  }

  getConfig() {
    return this.configMap;
  }

  printConfig() {
    this.configMap.forEach((value, key) => console.log(`${key} => ${value}`));
  }

}
