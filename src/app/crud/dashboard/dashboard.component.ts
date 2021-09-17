import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'src/app/shared/services/emp-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  EmpArray:any=[];
  constructor(private _EmpSer:EmpDataService) { }

  ngOnInit(): void {
    this.fetdata();
  }

  //fetching data from service method
  fetdata(){
    this._EmpSer.getUserRecord().subscribe((res)=>{
      this.EmpArray=res;
    })
  }

  //sending id to service for deleting record from database
  deleteData(id:any){
    if(confirm(`Are you sure you want to delete the record with id ${id}`)){
      this._EmpSer.deleteRecord(id).subscribe(()=>{
        this.fetdata();
      })
    }


    }
  

}
