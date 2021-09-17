import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../shared/services/emp-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  pData:string="";
  cData:any;
  empData:any;

  constructor(private _empSer:EmpDataService) { }

  ngOnInit(): void {
    // this._empSer.employeeDetail();
    this.empData = this._empSer.EmployeeData;
  }

  sendData(val:any){
    this.pData=val;
    console.log(val);
  }

}
