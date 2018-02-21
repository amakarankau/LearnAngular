import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderFormComponent } from './order-form/order-form.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
    
  ],
  declarations: [
    OrderFormComponent,
    OrderItemComponent,
    OrderListComponent
  ],
  providers: []
})
export class OrderModule {}
