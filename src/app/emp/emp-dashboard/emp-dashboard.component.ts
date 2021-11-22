import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { emp } from '../classes/emp';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  @Input() empData: emp;
  @Output() empDelete: EventEmitter<emp> = new EventEmitter();

  empDatas: emp[];
  id: any;

  constructor(
    private route: ActivatedRoute,
    private empservice: EmpService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDataEmpId();
  }

  getDataEmpId() {
    this.empservice.getDataEmpId().subscribe(data => {
      this.empDatas = data;
      console.log();
    })
  }
}
