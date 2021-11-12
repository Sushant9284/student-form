import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form/student-form.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentRecordComponent } from './student-record/student-record.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    AddStudentComponent,
    StudentRecordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
