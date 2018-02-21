import { OrderModule } from './order/order.module';
import { CartService } from './cart/services/cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    ProductsModule,
    OrderModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule, // Last !!!
    AppRoutingModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }

}
