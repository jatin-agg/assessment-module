import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthenticateLoginService {


  executeAuthenticationService(username , password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({Authorization: basicAuthHeaderString});

    return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth' , {headers}).pipe(
      map(
        data =>{
          sessionStorage.setItem('authenticaterUser' , username);
          sessionStorage.setItem('token' , basicAuthHeaderString);
          return data;
        }


      )
    );


  }



  executeJWTAuthenticationService(username , password){
   
    return this.http.post<any>('http://localhost:8080/authenticate' , {username , password}).pipe(
      map(
        data =>{
          sessionStorage.setItem('authenticaterUser' , username);
          sessionStorage.setItem('token' , `Bearer ${data.token}`);
          return data;
        }


      )


    );
    
      }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticaterUser');
    
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token');
    }
    
    
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user===null);

  }

  logOut() {
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }

  
  constructor(private router:Router , private http:HttpClient) { }

}

export class AuthenticationBean{
  constructor(public message:string){

  }
}
