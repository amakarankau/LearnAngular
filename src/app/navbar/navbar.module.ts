import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './navbar.component';
import { CartComponent } from '../cart/index';
import { CartModule } from '../cart/index';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, RouterModule, FormsModule, CartModule],
  exports: [NavBarComponent],
})
export class NavBarModule { }
