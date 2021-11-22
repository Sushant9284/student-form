import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emp } from '../classes/emp';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {

  

  registrationForm: FormGroup;

  emp: emp[];

  empdata: emp = new emp();

  constructor(private fb: FormBuilder, private empservice: EmpService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      empName: ['', Validators.required],
      empNo: ['', Validators.required],
      profile: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      bloodGroup: ['', Validators.required]
    }
    )
  }

  onSignUp() {

    this.empdata.id = this.registrationForm.value.id;
    this.empdata.empName = this.registrationForm.value.empName;
    this.empdata.empNo = this.registrationForm.value.empNo;
    this.empdata.profile = this.registrationForm.value.profile;
    this.empdata.gender = this.registrationForm.value.gender;
    this.empdata.dob = this.registrationForm.value.dob;
    this.empdata.age = this.registrationForm.value.age;
    this.empdata.emailId = this.registrationForm.value.emailId;
    this.empdata.password = this.registrationForm.value.password;
    this.empdata.mobileNo = this.registrationForm.value.mobileNo;
    this.empdata.address = this.registrationForm.value.address;
    this.empdata.bloodGroup = this.registrationForm.value.bloodGroup;


    this.empservice.postRegistrationForm(this.empdata).subscribe(
      data => {
        console.log(data);
        console.log(this.empdata);
        alert("Registration Successful");
        this.registrationForm.reset();
        this.router.navigate(['emp/login-page'])
      }, err => {
        alert("something went wrong")
      }
    )

  }
}
