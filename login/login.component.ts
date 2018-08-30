import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { iLoginCreds } from './login'
import { SawaalComponent } from '../sawaal/sawaal.component'

@Component({
  selector: 'quiz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.getLoginCreds().subscribe(login => {this.loginCreds = login;console.log(this.loginCreds)});
  }

  username: string;
  password: string;
  loginCreds: any;
  displayForm: boolean = true;
  displayRules: boolean = false;
  iMGame:boolean = true;
  displayQuestion: boolean = false;

  onLogIn(){
    for(var i=0; i<this.loginCreds.length; i++){
      if((this.username == this.loginCreds[i].username) && (this.password == this.loginCreds[i].password)){
        this.displayForm = false;
        this.displayRules = true;
      }
    }
  }

  imGame(){
    this.displayRules = false;
    this.displayQuestion = true;
  }
  agree(){
    this.iMGame = !this.iMGame;
  }
}
