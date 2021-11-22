import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './emp/dashboard/dashboard.component';
import { LoginPageComponent } from './emp/login-page/login-page.component';
import { AdminPageComponent } from './emp/admin-page/admin-page.component';
import { EmpRegistrationComponent } from './emp/emp-registration/emp-registration.component';
import { FrontPageComponent } from './emp/front-page/front-page.component';
import { EmpComponent } from './emp/emp.component';
import { HomePageComponent } from './emp/home-page/home-page.component';
import { EmpDashboardComponent } from './emp/emp-dashboard/emp-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    AdminPageComponent,
    EmpRegistrationComponent,
    FrontPageComponent,
    EmpComponent,
    HomePageComponent,
    EmpDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
