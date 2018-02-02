import { Component, OnInit, ViewChild, ElementRef, Optional, Provider, Inject } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { OnChanges, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { CartService } from '../cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Product } from '../../products/index';
import { CartItem } from '../cart-item/cart-item.model';
import { GeneratorService, ConfigOptionsService, ConstantsService, GeneratorServiceFactory, TokenFromFactory } from '../../utils';

const sInstance1 = new ConstantsService();
const sInstance2 = new ConfigOptionsService();

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [
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


  cartItems: CartItem[] = [];

  constructor(private cartService: CartService,  @Inject(TokenFromFactory) private factoryGeneratorService: string,
   private trueGeneratorService: GeneratorService, @Optional() private configOptionsService: ConfigOptionsService,
   @Optional() private constansService: ConstantsService) { }

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
    const currentItems = [...this.cartItems];
    const itemsWithoutRemoved = currentItems.filter(i => i.product.id !== item.product.id);
    this.cartItems = itemsWithoutRemoved;
    this.cartService.updateCartContent(this.cartItems);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  upQuantity(item: CartItem) {
    if (item.product.inStock > 0 ) {
      item.quantity++;
      item.product.inStock--;
    }
  }

  downQuantity(item: CartItem) {
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

}

