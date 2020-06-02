import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Loaderservices } from '../loadercomponent/lader.services';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    constructor (private loaderservices:Loaderservices){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        this.loaderservices.show();
        const secureReq = req.clone({
            url: req.url.replace('/', 'https://jsonplaceholder.typicode.com/')
          });
          // send the cloned, "secure" request to the next handler.
          return next.handle(secureReq).pipe(
            finalize(() => {
                this.loaderservices.hide();
    })
          );

  }
}