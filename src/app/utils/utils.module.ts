import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfigOptionsService } from './config-options.service';
import { ConstantsService } from './constants.service';
import { GeneratorService } from './generator.service';
import { LocalStorageService } from './local-storage.service';

import { TxtSizeDirective } from './txt-size.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TxtSizeDirective],
  exports: [TxtSizeDirective],
  providers: [LocalStorageService, GeneratorService, ConstantsService, ConfigOptionsService]
})
export class UtilsModule { }
