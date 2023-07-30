import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  registerPage: boolean = true;

  toggleOtp() {
    this.registerPage = !this.registerPage;
  }

  verifyOTP() {
    console.log('verification button clicked');
  }
}