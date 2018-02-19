import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../core/guards/auth.guard';
import { AdminComponent, AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent} from '.';
import { ManageProductFormComponent } from './manage-products/manage-product-form/manage-product-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'orders', component: ManageOrdersComponent },
          { path: 'products', component: ManageProductsComponent },
          { path: 'products/edit/:productId', component: ManageProductFormComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

export let adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageProductsComponent, ManageOrdersComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
