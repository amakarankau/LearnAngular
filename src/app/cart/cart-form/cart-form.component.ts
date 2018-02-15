// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute, Params, Router  } from '@angular/router';

// // rxjs
// import { switchMap } from 'rxjs/operators';

// import { Cart } from './../models/cart.model';
// import { UserArrayService } from './../services/cart.service';
// import { Subscription } from 'rxjs/Subscription';

// @Component({
//   templateUrl: './user-form.component.html',
//   styleUrls: ['./user-form.component.css'],
// })
// export class UserFormComponent implements OnInit, OnDestroy {
//   user: Cart;
//   originalUser: Cart;

//   private sub: Subscription;

//   constructor(
//     private userArrayService: UserArrayService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.user = new Cart(null, '', '');

//     // we should recreate component because this code runs only once
//     const id = +this.route.snapshot.paramMap.get('userID');
//     this.sub = this.userArrayService.getUser(id)
//       .subscribe(
//         user => {
//           this.user = {...user};
//           this.originalUser = {...user};
//         },
//         err => console.log(err)
//       );
//   }

//   ngOnDestroy() {
//     this.sub.unsubscribe();
//   }
//   saveUser() {
//     const user = {...this.user};

//     if (user.id) {
//       this.userArrayService.updateUser(user);
//       this.router.navigate(['/users', {editedUserID: user.id}]);
//     } else {
//       this.userArrayService.addUser(user);
//       this.goBack();
//     }
//     this.originalUser = {...this.user};
//   }

//   goBack() {
//     this.router.navigate(['./../../'], { relativeTo: this.route});
//   }

// }
