import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {empData} from 'src/app/shared/constant/constant';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  msg:string = "Hellooo All..Welcome";

  emp=empData;  //accessing constant data

  // emp=[
  //   {id:101,name:"A",address:"Kerala",gender:"Male"},
  //   {id:102,name:"B",address:"Karnataka",gender:"Female"},
  //   {id:103,name:"C",address:"Tamil Nadu",gender:"Male"},
  //   {id:102,name:"D",address:"Mahrashtra",gender:"Female"},
  //   {id:103,name:"E",address:"Goa",gender:"Male"}
  // ]

  d = new Date();

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  setId(val:any){
    this._router.navigate(['pipes',val]);
  }

  setName(val:any){
    this._router.navigate(['pipes',val]);
  }

}
