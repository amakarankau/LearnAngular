import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService, CustomPreloadingStrategyService  } from './services';
import { MessagesComponent } from './components/';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services';
import { LoginComponent } from './components/login/login.component';


import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { LocalStorageService } from './services/local-storage.service';

import { TxtSizeDirective } from './directives/txt-size.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessagesComponent, LoginComponent, TxtSizeDirective, OrderByPipe],
  exports: [TxtSizeDirective, OrderByPipe],
  providers: [MessagesService, AuthGuard, AuthService, CustomPreloadingStrategyService,
    LocalStorageService, GeneratorService, ConstantsService, ConfigOptionsService]


})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
 }
