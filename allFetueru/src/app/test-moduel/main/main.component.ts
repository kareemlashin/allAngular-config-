import { Validators } from '@angular/forms';
import { FormControl, FormArray } from '@angular/forms';
import { FormGroup, FormControlName } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  nameForm=new FormGroup({
    city:new FormGroup({
      one:new FormControl('',[Validators.required,Validators.minLength(10),Validators.email,Validators.pattern(/^[a-z]{}$/)]),
      two:new FormControl(),

    }),
    name:new FormControl(),
    age:new FormControl(),
    all:new FormControl(),
    data:new FormControl(),
    desc:new FormControl(),
    arr:new FormArray([])
  })
  onSubmit(){
    console.log(this.nameForm.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
