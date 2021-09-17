import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpDataService } from 'src/app/shared/services/emp-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number=0;
  empObj:any;
  constructor(private _Actroute:ActivatedRoute,private _empSer:EmpDataService,private _route:Router) { }

  ngOnInit(): void {
    this._Actroute.paramMap.subscribe((parm)=>{
      this.id=Number(parm.get('id'));
      console.log(this.id);
    });
    this._empSer.getSingleRecord(this.id).subscribe((res)=>{
      this.empObj={...res};
      console.log(this.empObj);
    })
  }
  sendData(val:any){
    const empObj={
      id:this.id,
      name:val.name,
      post:val.post,
      salary:val.salary
    }
    this._empSer.updateRecord(empObj).subscribe(()=>{
      alert("Data Updated successfully");
      this._route.navigate(['/crud']);
    })
  }

}
