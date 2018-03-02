import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions  } from '@angular/router';
import { AboutComponent, PageNotFoundComponent } from './components';
import { LoginComponent, AuthGuard, CustomPreloadingStrategyService    } from './core';
import { OrderFormComponent } from './order/order-form/order-form.component';

const routes: Routes = [
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About' }
    },
    {
        path: 'order',
        component: OrderFormComponent,
        data: { title: 'Order' }
    },
    {
        path: 'login',
        component: LoginComponent ,
        data: { title: 'Login' }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        loadChildren: 'app/cart/cart.module#CartModule',
        data: { title: 'Cart' }
    },
    {
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' }
    }
];

const extraOptions: ExtraOptions = {
    preloadingStrategy: CustomPreloadingStrategyService,
    // enableTracing: true // Makes the router log all its internal events to the console.
  };
  
  

export let appRouterComponents = [AboutComponent, PageNotFoundComponent];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, extraOptions)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
