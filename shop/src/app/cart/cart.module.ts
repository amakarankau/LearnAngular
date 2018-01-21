import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule],
  exports: [CartComponent],
  providers: [CartService]
})
export class CartModule { }
