import { Component, OnInit } from '@angular/core';
import { AuthenticateLoginService } from '../authenticate-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService:AuthenticateLoginService , private router:Router ) { }

  ngOnInit(): void {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}
