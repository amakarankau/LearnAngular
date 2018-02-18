import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router  } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { DialogService, CanComponentDeactivate } from './../../shared';


// rxjs
import { switchMap } from 'rxjs/operators';

import { CartItem } from './../models/cart-item.model';
import { CartService } from './../services/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent implements OnInit, OnDestroy { // , CanComponentDeactivate 
  cart: CartItem;
  originalCart: CartItem;

  private sub: Subscription;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

//   canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
//     const flags = Object.keys(this.originalUser).map(key => {
//       if (this.originalUser[key] === this.user[key]) {
//         return true;
//       }
//       return false;
//     });

//     if (flags.every(el => el)) {
//       return true;
//     }
    
//     return this.dialogService.confirm('Discard changes?');
// }


  ngOnInit(): void {
    this.cart = new CartItem(null, 1);

    // we should recreate component because this code runs only once
    this.route.data.subscribe(data => {
      this.cart = {...data.cart};
      this.originalCart = {...data.cart}; //
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  saveCart() {
    // const cart = {...this.cart};

    // if (cart.id) {
    //   this.cartService.updateCart(cart);
    //   this.router.navigate(['/cart', {editedCartItemId: cart.id}]);
    // } else {
    //   this.cartService.addCart(cart);
    //   this.goBack();
    // }
    // this.originalCart = {...this.cart};
  }

  goBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route});
  }

}
