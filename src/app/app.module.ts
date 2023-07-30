import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { BackgroundComponent } from './components/background/background.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { LoginComponent } from './partials/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, InputComponent, BackgroundComponent, TestingPageComponent, LoginComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
