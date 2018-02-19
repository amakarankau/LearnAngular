import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule, adminRouterComponents  } from './admin.routing.module';
import { ManageProductComponent, ManageProductsComponent, ManageProductFormComponent } from './manage-products';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [adminRouterComponents, ManageOrdersComponent, ManageProductComponent, ManageProductsComponent, 
    ManageProductFormComponent]
})
export class AdminModule { }

