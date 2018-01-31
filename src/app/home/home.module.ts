import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HomeComponent],
})
export class HomeModule { }
