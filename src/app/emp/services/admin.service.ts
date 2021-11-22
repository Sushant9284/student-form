import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { emp } from '../classes/emp';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  api = "http://localhost:4000/datas";

  getRegistrationForm(): Observable<any> {
    return this.http.get<any>(this.api);
  }


}
