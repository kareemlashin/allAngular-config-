import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-basic',
  templateUrl: './b-basic.component.html',
  styleUrls: ['./b-basic.component.scss']
})
export class BBasicComponent implements OnInit {

  name_interpolation:string="name  is kareem";
  x:number=4;
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";    
  alt:string="property-binding";
  property:boolean=true;
  one:boolean=true;
  two:boolean=false;
  style:string="#09c";
  three:boolean=true;
  width:string="100px";
  height:string="100px";
  getClass:string="one";
  twoWayDataBinding:string;

  interpolation:string="name";
  prop:string="https://dzone.com/themes/dz20/images/dz_cropped.png";

  font:string='10px';
  constructor() { }

  ngOnInit(): void {
  }

}
