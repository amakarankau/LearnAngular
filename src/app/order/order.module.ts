import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderFormComponent } from './order-form/order-form.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderService } from './services/order.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    OrderFormComponent,
    OrderItemComponent,
    OrderListComponent
  ],
  exports: [OrderListComponent],
  providers: [OrderService]
})
export class OrderModule {}
