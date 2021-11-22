
import { Component, Input, OnInit } from '@angular/core';
// import empData from '../../../assets/empData.json';
import { emp } from '../classes/emp';
import { EmpService } from '../services/emp.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() emp: emp;

  empDatas: emp[];

  empData: any;

  constructor(private empservice: EmpService) { }

  ngOnInit(): void {
    console.log(this.empDatas);
    this.empservice.getRegistrationForm().subscribe(data => {
      this.empDatas = data;
      console.log(this.empDatas);
    })
  }

  getAllData() {
    this.empservice.getRegistrationForm().subscribe(res => {
      this.empDatas = res;
      console.log(this.empDatas);
    })
  }

  deleteData(data: any) {
    this.empservice.deleteRegostrationForm(data.id).subscribe(res => {
      console.log(res);
      this.getAllData();
    })
  }

  editData() {

  }

}
