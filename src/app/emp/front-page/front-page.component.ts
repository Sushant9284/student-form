import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  logout = false;

  emplogins = true;
  adminlogins = false;
  constructor() { }

  ngOnInit(): void {
  }

  emplogin() {
    this.emplogins = true;
    this.adminlogins = false;
  }

  adminlogin() {
    this.emplogins = false;
    this.adminlogins = true;
  }

}
