import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  // isCondition:boolean = false;
  isTerm:boolean = false;

  cars:string[]=["Toyota","Ford","Honda","Benz"];
  bikes:string[] = ["Kawasaki","Honda","Yamaha","Suzuki"];
  c:boolean = false;
  b:boolean = false;
  a:string="";
  d:string="";
  hid:boolean=false;
  hidd:boolean=false;
  
  car(){
    this.c = true;
    this.b = false;
  }

  bike(){
    this.b = true;
    this.c = false;
  }

  cr(a:string){
    if(a=="Toyota"){
      this.hid=true;
      this.a = "Toyota";
    }
    else if(a=="Ford"){
      this.hid=true;
      this.a = "Ford";
    }
    else if(a=="Honda"){
      this.hid=true;
      this.a = "Honda";
    }
    else if(a=="Benz"){
      this.hid=true;
      this.a = "Benz";
    }
  }

  bk(b:string){
    if(b=="Kawasaki"){
      this.hidd=true;
      this.d = "Kawasaki";
    }
    else if(b=="Honda"){
      this.hidd=true;
      this.d = "Honda";
    }
    else if(b=="Yamaha"){
      this.hidd=true;
      this.d = "Yamaha";
    }
    else if(b=="Suzuki"){
      this.hidd=true;
      this.d = "Suzuki";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}



