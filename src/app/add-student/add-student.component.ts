import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { student } from '../student-form/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;

  @Output() studentAdd: EventEmitter<student> = new EventEmitter();

  rollNo: number
  name: string
  dob: string
  address: string
  email: string
  phoneNo: string

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      rollNo: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phoneNo: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.studentForm.controls; }

  onSubmit() {
    const student = {
      rollNo: this.rollNo,
      name: this.name,
      dob: this.dob,
      address: this.address,
      email: this.email,
      phoneNo: this.phoneNo
    }
    this.studentAdd.emit(student);
  }



}
