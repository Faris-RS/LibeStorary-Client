import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { BackgroundComponent } from './components/background/background.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { LoginComponent } from './partials/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupComponent } from './partials/signup/signup.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SignupOTPComponent } from './partials/signup-otp/signup-otp.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    BackgroundComponent,
    TestingPageComponent,
    LoginComponent,
    LoginPageComponent,
    SignupComponent,
    RegisterPageComponent,
    SignupOTPComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
