import { Component, OnInit } from '@angular/core';
interface student{
  name:string;
  id:number;
}
@Component({
  selector: 'app-c-all-directives',
  templateUrl: './c-all-directives.component.html',
  styleUrls: ['./c-all-directives.component.scss']
})
export class CAllDirectivesComponent implements OnInit {
  img="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";  
  itemParent:string="kkk";  
  dataSend:string="100 LE";
  y:string="1000";
  z:string=" a b c d e f g";
  masterName:string="dfdfdfdf";
  exp:boolean=true;
  person:object={name:'kareem'}
  allStudent:student[]=[
    {
      id: 4,
      name:"kareem"
    }
  ];
  x:string=``;
  d:string=``;
  allProduct:Array<any>=[
    { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
    { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
    { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
    { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
    { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
];
  switchExp:string='rd';

  constructor() {
    // build class
    console.log(`constructor`);
  }

  ngOnChanges() {
    // input
    console.log(`ngOnChanges - data is `);
  }

  ngOnInit() {
    // in inthilze class i time
    console.log(`ngOnInit  - data is `);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    // 
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    //
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    // 
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  // life cycle 

}
