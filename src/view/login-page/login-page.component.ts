import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/controller/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private router: Router, private authService: AuthService) {

   }

employeeIdGlobal:string = ''

  logIn(employeeIdLocal: string): void {
    console.log('yes'+employeeIdLocal);
    console.log('no' + this.employeeIdGlobal);
     this.router.navigateByUrl('/home-page');
    this.authService.login(this.employeeIdGlobal)
         .subscribe( data => { 
            console.log("Is Login Success: " + data);


})
  }

 

}