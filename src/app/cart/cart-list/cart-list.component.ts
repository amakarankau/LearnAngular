import { Component, OnInit, Output, ViewChild, ElementRef, Optional, Provider, Inject, PipeTransform, EventEmitter } from '@angular/core';

import { forEach } from '@angular/router/src/utils/collection';
import { OnChanges, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { CartService } from '../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Product } from '../../products/index';
import { CartItem } from '../models/cart-item.model';
import { GeneratorService, ConfigOptionsService, ConstantsService, GeneratorServiceFactory, TokenFromFactory } from '../../core';
import { OrderByPipe } from '../../shared/pipes/order-by.pipe';


// rxjs
import { Observable } from 'rxjs/Observable';
import { catchError, switchMap  } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

import { Router, ActivatedRoute, Params  } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service';


const sInstance1 = new ConstantsService();
const sInstance2 = new ConfigOptionsService();

@Component({
  // selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [
    OrderByPipe,
    { provide: ConstantsService, useValue: sInstance2 },
    // { provide: TokenFromFactory, useFactory:  GeneratorServiceFactory(3), deps: [ GeneratorService ] }
  ]
})

export class CartListComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild(CartItemComponent)
  private appCart: CartItemComponent;

  @ViewChild('testChild')
  private testChild: ElementRef;

  @ViewChild('stringLength')
  private stringLength: ElementRef;

  @ViewChild('configKey')
  private configKey: ElementRef;

  @ViewChild('configValue')
  private configValue: ElementRef;

  @Output() proceed = new EventEmitter<CartItem[]>();

  clicked = true;
  txtSize = '25px';

  private sortType: 'name' | 'quantity' | 'price' = 'name';
  private sortDirection: 'asc' | 'desc'  = 'desc';

  cartItems: CartItem[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private cartService: CartService,
    public orderByPipe: OrderByPipe,
    private trueGeneratorService: GeneratorService,
    private router: Router,
    private route: ActivatedRoute,
    // @Inject(TokenFromFactory) private factoryGeneratorService: string,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constansService: ConstantsService
  ) { }

  getInfo(cartItem: CartItem) {
    this.localStorageService.setItem('from', 'cart');
    const link = ['info', cartItem.product.id];
    this.router.navigate(link , {relativeTo: this.route});
  }


  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }


 ngOnChanges() {
   this.getTotalPrice();
 }

 ngAfterViewInit() {
  //  console.log('Get ViewChild by # ' + (<HTMLInputElement>this.testChild.nativeElement).innerText);
  //  this.appCart.childMethodCalledFromParent();
 }

  removeFromCart(item: CartItem) {
    const itemsWithoutRemoved = this.cartItems.filter(i => i.product.id !== item.product.id);
    // const itemsWithoutRemoved = this.cartItems.pipe(
    //   map((items: Array<CartItem>) => items.filter(i => i.product.id !== item.product.id)));

    this.cartItems = itemsWithoutRemoved;
    this.cartService.updateCartContent(this.cartItems);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  onIncrease(item: CartItem) {
    if (item.product.inStock > 0 ) {
      item.quantity++;
      item.product.inStock--;
    }
  }

  onDecrease(item: CartItem) {
    if (item.quantity !== 0) {
      item.quantity--;
      item.product.inStock++;
    }
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  getString() {
    console.log('From true GeneratorService: ' + this.trueGeneratorService.getString(this.stringLength.nativeElement.value));
    // console.log('From factory of GeneratorService: ' + this.factoryGeneratorService);
  }

  getConstant() {
    this.constansService.getServiceName();
    console.log(ConstantsService.CONSTANT);
  }

  saveConfigOption() {
    this.configOptionsService.setToConfig(this.configKey.nativeElement.value, this.configValue.nativeElement.value);
    this.configOptionsService.printConfig();
  }

  clickText() {
    this.clicked = !this.clicked;
    if (this.clicked) {
      this.txtSize = '25px';
    } else {
      this.txtSize = '16px';
    }
  }

  sortByName() {
    this.sortType = 'name';
    // this.orderByPipe.transform(this.cartItems, 'name', this.ascFlag);
    this.toggleAscFlag();
  }

  sortByQuantity() {
    this.sortType = 'quantity';
    // this.orderByPipe.transform(this.cartItems, 'quantity', this.ascFlag);
    this.toggleAscFlag();
  }

  sortByPrice() {
    this.sortType = 'price';
    // this.orderByPipe.transform(this.cartItems, 'price', this.ascFlag);
    this.toggleAscFlag();
  }

  proceedOrder(){
    this.localStorageService.setItem('cart', JSON.stringify(this.cartItems));
    this.router.navigate(['/order']);
  }

  private toggleAscFlag() {
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
  }



}






