import { Component, Input, OnInit } from '@angular/core';
import { student } from './student';
import * as data from '../../assets/data.json';;

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  @Input() student: student;

  localItem: any = [];
  students: student[] = [];

  constructor() {
    this.localItem = localStorage.getItem("Students....");
    if (this.localItem == null) {
      this.students = [];
    }
    else {
      this.students = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
    
  }

  addStudent(student: student) {
    console.log(student);
    this.students.push(student);
    localStorage.setItem("students", JSON.stringify(this.students))
  }
}
