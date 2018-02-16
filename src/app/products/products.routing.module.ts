import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductFormComponent } from '.';
const routes: Routes = [
    {
        path: 'home',
        component: ProductListComponent,
        data: {
            title: 'Products list'
                }
    },
    {
        path: 'edit/:id',
        component: ProductFormComponent
        }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
