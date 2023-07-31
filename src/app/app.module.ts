import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SectionCardComponent } from './components/section-card/section-card.component';

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
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    SectionCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotToastModule.forRoot(),
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
