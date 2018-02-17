import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent, CartListComponent, CartFormComponent, CartResolveGuard  } from '.';
import { CanDeactivateGuard } from './../shared';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: 'add',
        component: CartFormComponent
      },
      {
        path: 'edit/:cartItemId',
        component: CartFormComponent,
        // canDeactivate: [CanDeactivateGuard],
        // resolve: {
        //   user: UserResolveGuard
        // }

      },
      {
        path: '',
        component: CartListComponent
      },
    ]
  }
];

export const cartRouterComponents = [CartComponent, CartListComponent, CartFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
