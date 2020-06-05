import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { TrendsComponent } from './trends/trends.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateAssessComponent } from './update-assess/update-assess.component';
import { UpdateCandidatesComponent } from './update-candidates/update-candidates.component';
import { RouteGuardService } from './route-guard.service';


const routes: Routes = [
  {path:'' , component: HomeComponent },
  {path:'login' , component: LoginComponent},
  {path:'profile' , component: ProfileComponent},
  {path:'assessments' , component: AssignmentsComponent, canActivate: [RouteGuardService]},
  {path:'candidates' , component: CandidatesComponent, canActivate: [RouteGuardService]},
  {path:'trends' , component: TrendsComponent, canActivate: [RouteGuardService]},
  {path:'logout' , component: LogoutComponent},
  { path: 'assessment/:id', component: UpdateAssessComponent, canActivate: [RouteGuardService] },
  { path: 'candidates/:id', component: UpdateCandidatesComponent, canActivate: [RouteGuardService] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
