import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SawaalService {

  constructor(private http: HttpClient) { }

  sawaalUrl: string = 'src/app/sawaal/prashnaSanch/prashna'

  getSawaal(ques: number){
    return this.http.get(this.sawaalUrl + ques + '.json');
  }
  
}
