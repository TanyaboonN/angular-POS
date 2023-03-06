import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '../view/login-page/login-page.component';
import { HomePageComponent } from '../view/home-page/home-page.component';
import { NavbarComponent } from '../view/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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
     FormsModule,
     BrowserAnimationsModule,
     MatSidenavModule,
     MatListModule,
     MatIconModule,
     MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
