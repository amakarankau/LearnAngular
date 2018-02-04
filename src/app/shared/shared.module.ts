import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { LocalStorageService } from './services/local-storage.service';

import { TxtSizeDirective } from './directives/txt-size.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TxtSizeDirective],
  exports: [TxtSizeDirective],
  providers: [LocalStorageService, GeneratorService, ConstantsService, ConfigOptionsService]
})
export class SharedModule { }
