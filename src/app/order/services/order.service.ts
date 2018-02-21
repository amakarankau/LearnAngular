import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../../products/models/product.model';



@Injectable()
export class OrderService {

    deleteOrder() {
        console.log('delete');
    }

    confirmByAdmin() {
        console.log('aonfirm by admin');
    }
}

