import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { TrendsComponent } from './trends/trends.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpIntercepterBasicAuthService } from './http-intercepter-basic-auth.service';
import { UpdateAssessComponent } from './update-assess/update-assess.component';
import { UpdateCandidatesComponent } from './update-candidates/update-candidates.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    AssignmentsComponent,
    CandidatesComponent,
    TrendsComponent,
    LogoutComponent,
    UpdateAssessComponent,
    UpdateCandidatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: HttpIntercepterBasicAuthService , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
