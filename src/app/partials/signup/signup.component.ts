import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @Output() signupOTP = new EventEmitter<void>();

  ContinueToOTP() {
    this.signupOTP.emit();
  }
}
