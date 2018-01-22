import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { routeList } from './app.routes';

import { AppComponent } from './app.component';

import { ProductsModule } from './products/index';
import { CartModule } from './cart/index';
import { CartListComponent } from './cart/cart-list/cart-list.component';

import { NoContentComponent } from './no-content/no-content.component';
import { HomeComponent } from './home/home.component';

export const routeList: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cartList', component: CartListComponent},
  {path: '**', component: NoContentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
    HomeComponent
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
