import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // You can manipulate the request here (e.g., add headers)
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer YourAccessTokenHere'
      }
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}

