import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '../view/login-page/login-page.component';
import { HomePageComponent } from '../view/home-page/home-page.component';
import { NavbarComponent } from '../view/navbar/navbar.component';
// import { PopUpComponent } from '../view/pop-up/pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavbarComponent,
    // PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
