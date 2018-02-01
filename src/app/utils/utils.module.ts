import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './local-storage.service';
import { GeneratorService } from './generator.service';
import { ConstantsService } from './constants.service';
import { ConfigOptionsService } from './config-options.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LocalStorageService, GeneratorService, ConstantsService, ConfigOptionsService]
})
export class UtilsModule { }
