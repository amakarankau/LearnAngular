import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent, CartListComponent,  CartInfoComponent, CartResolveGuard  } from '.';
import { CanDeactivateGuard } from './../shared';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      // {
      //   path: 'add',
      //   component: CartFormComponent
      // },
      // {
      //   path: 'edit/:cartItemId',
      //   component: CartFormComponent,
      //   // canDeactivate: [CanDeactivateGuard],
      //   // resolve: {
      //   //   user: UserResolveGuard
      //   // }

      // },
      {
        path: 'info/:cartItemId',
        component: CartInfoComponent
      },
      {
        path: '',
        component: CartListComponent
      },
    ]
  }
];

export const cartRouterComponents = [CartComponent, CartListComponent, CartInfoComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
