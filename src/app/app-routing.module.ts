import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/pages/login/login.component';
import { HomeComponent } from './home/pages/home/home.component';

const routes: Routes = [
  {path: 'login', title: 'login' , component: LoginComponent},
  {path: "home", title: 'home', component: HomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
