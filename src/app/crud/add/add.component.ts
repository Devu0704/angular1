import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpDataService } from 'src/app/shared/services/emp-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _empSer:EmpDataService,private _router:Router) { }

  ngOnInit(): void {
  }

  addData(val:any){
    const empObj={
      name:val.name,
      post:val.post,
      salary:val.salary
    }
    this._empSer.addRecord(empObj).subscribe(()=>{
      alert("Data added Successfully");
      this._router.navigate(['/crud']);
    });
  }

}
