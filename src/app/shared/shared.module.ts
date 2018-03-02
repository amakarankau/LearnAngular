import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './services/dialog.service';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [OrderByPipe],
  exports: [OrderByPipe],
  providers: [DialogService, CanDeactivateGuard]
})
export class SharedModule { }
