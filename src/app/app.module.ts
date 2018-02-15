import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { routeList } from './app.routes';

import { AppComponent } from './app.component';

import { ProductsModule } from './products';
import { CartModule, CartListComponent } from './cart';

import { NoContentComponent, NavBarModule } from './components';
import { HomeComponent } from './home';
import { CoreModule } from './core';

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
    CoreModule,
    NavBarModule,
    BrowserModule,
    CartModule,
    ProductsModule,
    RouterModule.forRoot(routeList, {useHash: true, preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
