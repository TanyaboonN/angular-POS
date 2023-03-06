import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/view/home-page/home-page.component';
import { LoginPageComponent } from 'src/view/login-page/login-page.component';

const routes: Routes = [
  {path: 'login-page', component: LoginPageComponent },
  {path: 'home-page', component: HomePageComponent },
  {path: '', redirectTo: '/login-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
