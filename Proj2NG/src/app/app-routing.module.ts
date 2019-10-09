import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavComponent } from './component/nav/nav.component';
import { LandingComponent } from './component/landing/landing.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  // {path : "nav", component : NavComponent},
  // {path : "nav", component : DashboardComponent, outlet: 'content'},
  {path : "dashboard", component : DashboardComponent},
  {path : "landing", component : LandingComponent},
  {path : '', redirectTo: '/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
