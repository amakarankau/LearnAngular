import { CartItem } from './../models/cart-item.model';
import { ProductService } from './../../products/services/product.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { CartService } from './../services/cart.service';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css'],
})
export class CartInfoComponent implements OnInit {

  cartItem: CartItem;

  constructor(
    private localStorageService: LocalStorageService,
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

  goBack() {
    const fromPath = this.localStorageService.getItem('from');
    if (fromPath === 'cart') {
      this.router.navigate(['/cart']);
    } else if (fromPath === 'products') {
      this.router.navigate(['/home']);
    }
  }
}
