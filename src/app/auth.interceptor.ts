import {
    HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegistrationService } from './registration.service';
 
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _reg:RegistrationService) {}
 
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //add the jwt token (localStorage) request
    let authReq = req;
    const token = this._reg.getToken();
    if (token != null) {
      authReq = authReq.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
    {
        provide : HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi : true,
    },
];
 