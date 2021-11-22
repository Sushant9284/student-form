import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }
    )
  }

  onClick(form: any) {
    this.http.get<any>('http://localhost:3000/emp')
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.emailId === this.form.value.emailId && a.password === this.form.value.password
        });
        if (user) {
          alert("Login Success");
          this.form.reset();
          this.router.navigate(['emp/emp-dashboard']);
        } else {
          alert('user not found')
        }
      }, err => {
        alert("Something went Wrong")
      }
      );
  }

}
