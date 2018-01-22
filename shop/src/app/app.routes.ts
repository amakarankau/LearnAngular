import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content/index';
import { CartListComponent } from './cart/cart-list/cart-list.component';


export const routeList: Routes = [
  {path: '', component: AppComponent},
  {path: 'cartList', component: CartListComponent},
  {path: '**', component: NoContentComponent},
];

// export const routes: any = RouterModule.forChild(routeList);
