import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { CartItem } from './../models/cart-item.model';
import { CartService } from '../../shared/services/cart.service';

@Injectable()
export class CartResolveGuard implements Resolve<CartItem> {

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CartItem> | null {
    console.log('CartResolve Guard is called');
    const id = +route.paramMap.get('cartItemId');

    if (id) {
      return this.cartService.getCartItem(id)
      .pipe(
        catchError(() => {
          this.router.navigate(['/cart']);
          return of(null);
        })
      );
    } else {
      return of(new CartItem(null, 1));
    }
  }
}
