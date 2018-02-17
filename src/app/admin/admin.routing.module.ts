import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../core/guards/auth.guard';
import { AdminComponent, AdminDashboardComponent, ManageTasksComponent, ManageCartComponent } from '.';

const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'users', component: ManageCartComponent },
          { path: 'tasks', component: ManageTasksComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

export let adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageTasksComponent, ManageCartComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
