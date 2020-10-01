import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllMethodService } from "../service/all-method.service";
import { ActivatedRoute ,Router} from "@angular/router";
@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.scss']
})
export class ServComponent implements OnInit {
id:any;
  constructor(private _AllMethodService:AllMethodService,private _ActivatedRoute:ActivatedRoute,private _Router:Router) { 
   this.id = _ActivatedRoute.snapshot.paramMap.get('id');

  }
go(){
  this._Router.navigateByUrl('/');
  this._Router.navigate(['/path/',5]);
  this._Router.navigate(['/path/',{id:'',name:''}]);

}

  ngOnInit(): void {
    this._AllMethodService.getPostById(1).subscribe(x=>{
      let header = x.headers.get('pages');
      console.log(x.headers.get('X-Custom-Header'));
      console.log(x.body.someField);
      const allowValue = x.headers.get('allow');
    },(error:HttpErrorResponse)=>{
      console.log(error.message)
    })
  }

}
