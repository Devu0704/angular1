import { Component, OnInit } from '@angular/core';
import {regname,regemail,regmobile} from '../shared/constant/constant'

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.css']
})
export class UtdfComponent implements OnInit {

  pname=regname;
  pmail=regemail;
  pmobile=regmobile;

  constructor() { }

  ngOnInit(): void {
  }

  displayData(val:any){
    console.log(val);
  }

}
