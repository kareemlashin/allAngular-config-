import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm=new  FormGroup({
  email:new FormControl('',[Validators.email,Validators.required,Validators.pattern(/^[A-z]{1,}[A-z0-9]{2,}@(yahoo|gmail).com$/)]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)]),
})
logging(){
  console.log(this.loginForm.value);
this._AuthService.login(this.loginForm.value).subscribe(
  res=>{
    localStorage.setItem('token',res.token);
    this._router.navigate(['/pass'])
  },
  error=>{

})
}
  constructor(private _AuthService:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

}
