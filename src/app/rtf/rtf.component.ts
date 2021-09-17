import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {regmobile,regemail,regname} from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent implements OnInit {

  stdForm:any;


  constructor() { }

  ngOnInit(): void {
    this.stdForm = new FormGroup({
      sname: new FormControl("",[Validators.required,Validators.pattern(regname)]),
      scontact: new FormControl("",[Validators.required,Validators.pattern(regmobile)]),
      smail: new FormControl("",[Validators.required,Validators.pattern(regemail)]),
      sDob: new FormControl("",[Validators.required])
    })
  }

  displayData(val:any){
    console.log(val);
  }

}
