import { Component, OnInit } from '@angular/core';
import { AuthenticateLoginService } from '../authenticate-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  

  constructor(private authenticateService:AuthenticateLoginService , private router: Router) { }

  basicAuthenticate(){
    this.authenticateService.executeAuthenticationService(this.username,this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['assessments']);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
        alert(this.errorMessage);
      }
    )
    
  }

  basicJWTAuthenticate(){
    this.authenticateService.executeJWTAuthenticationService(this.username,this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['assessments']);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
        alert(this.errorMessage);
      }
    )
    
  }

  ngOnInit(): void {
  }

}
