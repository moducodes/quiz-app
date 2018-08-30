import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { SawaalComponent } from './sawaal/sawaal.component'
import { SawaalService } from './sawaal/sawaal.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SawaalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //HttpClient,
    HttpClientModule,
    LoginService,
    SawaalService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
