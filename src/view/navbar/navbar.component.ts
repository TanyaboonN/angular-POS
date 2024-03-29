import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  currentTime: number = Date.now()
  id: NodeJS.Timer | undefined
  displayStyle = "none";

  ngOnInit() {
    this.id = setInterval(() => {
      this.currentTime = Date.now()
      // console.log('this is current time!!!', this.currentTime)
    }, 1000);
    
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  backToLoginPage() {
    this.router.navigateByUrl('/login-page');
    this.displayStyle = "none";
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
