import { Routes, RouterModule } from '@angular/router';

import { CartListComponent } from './cart-list/cart-list.component';

// Route Configuration
export const cartRoutes: Routes = [
  { path: 'cartList', component: CartListComponent },
];

// export const routes: any = RouterModule.forChild(cartRoutes);
