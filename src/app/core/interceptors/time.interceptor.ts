import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

const requestFilterWords = ['products', 'orders'];

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clonedRequest: HttpRequest<any>;
    var filter = requestFilterWords.some(data => {
      return req.url.includes(data);
    })
    if (filter) {
      clonedRequest = req.clone({
        params: new HttpParams()
          .set('startTime', Date.now().toString())
      });
    } else {
      clonedRequest = req;
    }
    return next.handle(clonedRequest)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            debugger;
            if (!!clonedRequest.params.get('startTime')) {
              let respTime = Date.now().toString();
              let range = (+respTime - +clonedRequest.params.get('startTime'));
              console.log('Request time: ' + range + 'ms');
            }
            return event;
          }
        })
      );
  }
}
