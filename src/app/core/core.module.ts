import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPreloadingStrategyService  } from './services';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services';
import { LoginComponent } from './components';

import { ConfigOptionsService } from './services';
import { ConstantsService } from './services';
import { GeneratorService } from './services';
import { LocalStorageService } from './services';

import { TxtSizeDirective } from './directives/txt-size.directive';
import { OrderByPipe } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, TxtSizeDirective, OrderByPipe],
  exports: [TxtSizeDirective, OrderByPipe],
  providers: [AuthGuard, AuthService, CustomPreloadingStrategyService,
    LocalStorageService, GeneratorService, ConstantsService, ConfigOptionsService]


})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
 }
