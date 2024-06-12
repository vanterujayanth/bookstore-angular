import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'] // Note the correct property name here
})
export class LoginSignupComponent implements OnInit {
  login = true;

  constructor() { }

  ngOnInit(): void { }

  goToLogin() {
    this.login = true;
  }

  goToSignUp() {
    this.login = false;
  }
}
