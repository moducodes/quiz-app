import { Injectable } from '@angular/core';
import { iLoginCreds } from './login';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  credUrl: string = 'src/app/login/loginCreds.json'

  getLoginCreds(){
    return this.http.get(this.credUrl);
  }
}
