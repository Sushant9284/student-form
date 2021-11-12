import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { student } from '../student-form/student';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})
export class StudentRecordComponent implements OnInit {

  @Input() student: student;
  @Output() studentDelete: EventEmitter<student> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
