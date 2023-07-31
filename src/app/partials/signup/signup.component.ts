import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @Output() signupOTP = new EventEmitter<void>();

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    console.log('Form submitted!');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Passowrd:', this.confirmPassword);
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    if (this.password === this.confirmPassword) {
      this.ContinueToOTP();
    }
  }

  ContinueToOTP() {
    this.signupOTP.emit();
  }
}
