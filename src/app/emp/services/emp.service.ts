import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationModule, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { emp } from '../classes/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  api = "http://localhost:3000/emp";

  getRegistrationForm(): Observable<any> {
    return this.http.get<emp[]>(this.api);
  }

  postRegistrationForm(emp: emp): Observable<emp> {
    return this.http.post<emp>(this.api, JSON.stringify(emp), this.httpOptions)
  }



  deleteRegostrationForm(id: any): Observable<any> {
    return this.http.delete<any>(this.api + '/' + id, this.httpOptions)
  }

  getDataEmpId(): Observable<any> {
    return this.http.get<emp[]>(this.api);
  }

}
