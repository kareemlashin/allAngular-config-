import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-pageination',
  templateUrl: './pageination.component.html',
  
  styleUrls: ['./pageination.component.scss'],

})
export class PageinationComponent implements OnInit {
  @ViewChild("height") height:ElementRef;
  data1:Array<any>; 
  data2:Array<any>; 
page:number=1;

/*

  
*/
  constructor(private _AuthService:AuthService) { }


  ngOnInit(): void {
    this.load();
  }
  load(){
    this._AuthService.pagination(this.page).subscribe(x=>{
      this.data1=x.data;
      var headers = x.headers;

    })

  }
  @HostListener('mousewheel', ['$event']) onMousewheel($event) {
    
    var pannel = document.getElementById('scroll');
    var pannel2 = document.getElementById('all');
    let scroll =pannel.scrollTop; 
    let allH =pannel.scrollHeight; 
    let allH3 =pannel2.scrollHeight;
    let add=50;
    if (this.page==1) {
      add=20;
    }else if(this.page==2){
       add=20*this.page*1;

    }else {
      add=30*this.page*5;
    }
    if (scroll > allH-allH3+add) {
      this.loadpost();
    }



  }
  loadpost(){

this.page++;
this._AuthService.pagination(this.page++).subscribe(x=>{
      this.data2=x.data;
this.data1.concat(this.data2);
this.data1 = [ ...this.data1, ...this.data2];
    })

  }
}
