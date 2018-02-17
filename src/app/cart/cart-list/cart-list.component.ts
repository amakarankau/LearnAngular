import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { catchError, switchMap  } from 'rxjs/operators';

import { CartItem } from './../models/cart-item.model';
import { CartService } from './../services/cart.service';
import { Router, ActivatedRoute, Params  } from '@angular/router';

@Component({
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart$: Observable<Array<CartItem>>;
  private editedCartItem: CartItem;
  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  editCartItem(cartItem: CartItem) {
    // const link = ['/users/edit', user.id];
    // this.router.navigate(link);
    // or
    const link = ['edit', cartItem.id];
    this.router.navigate(link, {relativeTo: this.route});
  }

  isEdited(cartItem: CartItem) {
    if (this.editedCartItem) {
      return cartItem.id === this.editedCartItem.id;
    }
    return false;
}


  ngOnInit() {
    this.cart$ = this.cartService.getCart();

    this.route.paramMap
    .pipe(
      switchMap((params: Params) => this.cartService.getCartItem(+params.get('editedCartItemId')))
    )
    .subscribe(
      (cartItem: CartItem) => {
        this.editedCartItem = {...cartItem};
        console.log(`Last time you edited cartItem ${JSON.stringify(this.editedCartItem)}`);
      },
      err => console.log(err)
    );

  }
}
