import { Component, OnInit, ViewChild, ElementRef, Optional, Provider, Inject, PipeTransform } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { OnChanges, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { CartService } from '../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Product } from '../../products/index';
import { CartItem } from '../models/cart-item.model';
import { GeneratorService, ConfigOptionsService, ConstantsService, GeneratorServiceFactory, TokenFromFactory } from '../../core';
import { CoreModule, OrderByPipe } from '../../core';

const sInstance1 = new ConstantsService();
const sInstance2 = new ConfigOptionsService();

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [
    OrderByPipe,
    { provide: ConstantsService, useValue: sInstance2 },
    { provide: TokenFromFactory, useFactory:  GeneratorServiceFactory(3), deps: [ GeneratorService ] }
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

  clicked = true;
  txtSize = '25px';

  private sortType: 'name' | 'quantity' | 'price' = 'name';
  private sortDirection: 'asc' | 'desc'  = 'desc';

  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private orderByPipe: OrderByPipe,
    private trueGeneratorService: GeneratorService,
    @Inject(TokenFromFactory) private factoryGeneratorService: string,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constansService: ConstantsService
  ) { }

  ngOnInit() {
     this.cartItems = this.cartService.getCart();
  }

  ngOnChanges() {
    this.getTotalPrice();
  }

  ngAfterViewInit() {
    console.log('Get ViewChild by # ' + (<HTMLInputElement>this.testChild.nativeElement).innerText);
    this.appCart.childMethodCalledFromParent();
  }

  removeFromCart(item: CartItem) {
    const itemsWithoutRemoved = this.cartItems.filter(i => i.product.id !== item.product.id);
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
    console.log('From factory of GeneratorService: ' + this.factoryGeneratorService);
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

  private toggleAscFlag() {
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
  }
}

