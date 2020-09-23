import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './../shared/data.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['true', 'true'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
  data1:Array<any>; 
  data2:Array<any>; 
page:number=1;

/*

  
*/
magg:any;
  constructor(private _AuthService:DataService) { }


  ngOnInit(): void {
    this.load();
  }
  load(){
    this._AuthService.pagination(this.page).subscribe(x=>{
      this.data1=x.data;
      var headers = x.headers;

    },(err :any)=>{
      this.magg=err;
  })}
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
