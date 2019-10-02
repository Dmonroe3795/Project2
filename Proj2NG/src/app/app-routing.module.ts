import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotesComponent } from './component/notes/notes.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "notes", component : NotesComponent},
  {path : '', redirectTo: '/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
