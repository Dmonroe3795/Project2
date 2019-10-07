import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotesComponent } from './component/notes/notes.component';
import { NavComponent } from './component/nav/nav.component';
import { LandingComponent } from './component/landing/landing.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "nav", component : NavComponent},
  {path : "nav/notes", component : NotesComponent},
  {path : "landing", component : LandingComponent},
  {path : '', redirectTo: '/landing', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
