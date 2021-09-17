import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {


  imgPath:string = "../../assets/images/i1.jpg";
  imgName:string = "This is Image 1";

  
  constructor() { }

  ngOnInit(): void {
  }
  a:boolean = true;

  greet(){
    
    if(this.a){
      this.imgPath="../../assets/images/i2.jpg"
      this.imgName="This is image 2";
    }
    else{
      this.imgPath="../../assets/images/i1.jpg"
      this.imgName="This is image 1";
    }
    this.a = !this.a;
  }

}
