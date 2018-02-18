import { CartItem } from './../models/cart-item.model';
import { ProductService } from './../../products/services/product.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params, Router  } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { DialogService, CanComponentDeactivate } from './../../shared';


// rxjs
import { switchMap } from 'rxjs/operators';

import { CartService } from './../services/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css'],
})
export class CartInfoComponent implements OnInit {

  cartItem: CartItem;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('cartItemId');

  this.productService.getProductById(id)
      .then(product => {
        this.cartItem = Object.assign({}, new CartItem(product, 1));
      })
      .catch(err => console.log(err));
  }

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





  goBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route});
  }

}
