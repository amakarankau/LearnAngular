import { InjectionToken } from '@angular/core';

import { GeneratorService } from './generator.service';

export const TokenFromFactory = new InjectionToken<string>('FactoryToken');
export function GeneratorServiceFactory(lettersNumber: any) {
    return function(data: GeneratorService): string {
        return data.getString(lettersNumber);
      };
}

