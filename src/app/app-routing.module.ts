import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './emp/admin-page/admin-page.component';
import { DashboardComponent } from './emp/dashboard/dashboard.component';
import { EmpDashboardComponent } from './emp/emp-dashboard/emp-dashboard.component';
import { EmpRegistrationComponent } from './emp/emp-registration/emp-registration.component';
import { FrontPageComponent } from './emp/front-page/front-page.component';
import { HomePageComponent } from './emp/home-page/home-page.component';
import { LoginPageComponent } from './emp/login-page/login-page.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/college-info/admin-login' },
  // { path: 'college-info/admin-login', component: AdminLoginComponent },
  // { path: 'emp/login-page', component: FrontPageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/emp/home-page' },
  { path: 'emp/home-page', component: HomePageComponent },
  { path: 'emp/dashboard', component: DashboardComponent },
  { path: 'emp/login-page', component: LoginPageComponent },
  { path: 'emp/emp-registration', component: EmpRegistrationComponent },
  { path: 'emp/admin-page', component: AdminPageComponent },
  { path: 'emp/emp-dashboard', component: EmpDashboardComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private routes: Router) {
  }


}
