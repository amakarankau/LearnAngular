import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TxtSizeDirective } from './';
import { LoginComponent } from './components';
import { AuthGuard } from './guards/auth.guard';
import {
    AuthService, ConfigOptionsService, ConstantsService, CustomPreloadingStrategyService,
    GeneratorService, LocalStorageService
} from './services';
import { AppSettingsAPIProvider } from './services/app-settings.config';
import { AppSettingsService } from './services/app-settings.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, TxtSizeDirective],
  exports: [TxtSizeDirective],
  providers: [AuthGuard, AuthService, CustomPreloadingStrategyService, AppSettingsService,
    LocalStorageService, GeneratorService, ConstantsService, ConfigOptionsService, AppSettingsAPIProvider]


})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
 }
