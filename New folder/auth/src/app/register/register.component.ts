import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm=new  FormGroup({
    f_name:new FormControl('',[Validators.required,Validators.minLength(8)]),
    l_name:new FormControl('',[Validators.required,Validators.minLength(8)]),
    email:new FormControl('',[Validators.email,Validators.required,Validators.pattern(/^[A-z]{1,}[A-z0-9]{2,}@(yahoo|gmail).com$/)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)]),

  })
  register(){
    console.log(this.registerForm.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
