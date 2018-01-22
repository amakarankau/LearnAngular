import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { routeList } from './app.routes';

import { AppComponent } from './app.component';

import { ProductsModule } from './products/index';
import { CartModule } from './cart/index';

import { NoContentComponent } from './no-content/no-content.component';



@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    RouterModule.forRoot(routeList, {useHash: true, preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
