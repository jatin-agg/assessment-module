import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticateLoginService } from './authenticate-login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private authenticateService: AuthenticateLoginService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler){
    let basicAuthHeaderString = this.authenticateService.getAuthenticatedToken();
    let username = this.authenticateService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders:{
          Authorization:basicAuthHeaderString
        }
      
      
      })
    }
    

    return next.handle(request);
  
  
  
  }



}
