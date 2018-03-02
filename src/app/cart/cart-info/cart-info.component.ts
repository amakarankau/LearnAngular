import { CartItem } from './../models/cart-item.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { CartService } from '../../shared/services/cart.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { ProductsService } from '../../products/services/products.service';

@Component({
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css'],
})
export class CartInfoComponent implements OnInit {

  cartItem: CartItem;

  constructor(
    private localStorageService: LocalStorageService,
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('cartItemId');

    this.productsService.getProduct(id).toPromise().then(product => {
      this.cartItem = Object.assign({}, new CartItem(product, 1));
    }).catch(err => console.log(err));
  }

  goBack() {
    const fromPath = this.localStorageService.getItem('from');
    if (fromPath === 'cart') {
      this.router.navigate(['/cart']);
    } else if (fromPath === 'products') {
      this.router.navigate(['/home']);
    }
  }
}
