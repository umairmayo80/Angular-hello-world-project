import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request interceptor', request)
    // we cannot modify the original request, so we clone it and then add new info in the clone
    const newRequest = request.clone({headers: new HttpHeaders({'tokendf': '12345abc'})})
    // now send the newRequest
    // return next.handle(newRequest);


    // we can also define custom for different request type
    if (request.method === 'POST'){
      //cusotom logic
    }
    return next.handle(newRequest)
  }
}
