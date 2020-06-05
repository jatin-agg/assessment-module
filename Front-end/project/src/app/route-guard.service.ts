import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticateLoginService } from './authenticate-login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.authenticateService.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }

  }

  constructor(private authenticateService: AuthenticateLoginService, private router:Router) { }
}
