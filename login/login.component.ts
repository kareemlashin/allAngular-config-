import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    /*private _AuthService:AuthService,private _Router:Router*/
    ) { }
masg:any;
  ngOnInit(): void {
  }
/*login(data:any){
  this._AuthService.login(data).subscribe(res=>{
localStorage.setItem('token',res.token);
localStorage.setItem('token','fff')

this._Router.navigate(['/component']);
  },
  err=>{
this.masg=err;
  }
  )
}*/
}
