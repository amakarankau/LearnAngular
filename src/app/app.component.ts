import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Title, Meta  } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

// rxjs

import { Subscription } from 'rxjs/Subscription';
import { map, switchMap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

import { LocalStorageService } from './core/services/local-storage.service';
import { AuthService } from './core/services';
import { CartService } from './shared/services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(private cartService:CartService, private authService: AuthService, private metaService: Meta, private titleService: Title, private router: Router) { }

  onActivate($event) {
    // console.log('Activated Component', $event);
  }
  onDeactivate($event) {
    // console.log('Deactivated Component', $event);
  }

  ngOnInit() {
    this.setPageTitlesAndMeta();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

private setPageTitlesAndMeta() {
    this.sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(
        data => {
          this.titleService.setTitle(data['title']);
          this.metaService.addTags(data['meta']);
     }
  
      );
  }

  isEmptyCart(): boolean {
    return this.cartService.isEmptyCart();
  }

  isLoggedAdmin() {
    return this.authService.isLoggedIn;
  }
}

