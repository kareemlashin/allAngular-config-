import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup,FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-e-form',
  templateUrl: './e-form.component.html',
  styleUrls: ['./e-form.component.scss']
})
export class EFormComponent implements OnInit {
nameForm=new FormGroup({
  name:new FormControl('DF',[Validators.required,Validators.pattern(/^[A-z]{0,}$/),Validators.maxLength(100),Validators.minLength(5)]),
  age:new FormControl('10',[Validators.min(9),Validators.max(99)]),
  color:new FormControl('#09C'),
  radio:new FormControl(),
  select:new FormControl(),
  password:new FormControl('1111'),
  date:new FormControl(),
  useremail :  new FormArray([
  ]),
  personalData: new FormGroup({
    email: new FormControl('',[Validators.email]),
    mobile: new FormControl(),
    country: new FormControl(),
  }),
});
constructor(private formBuilder: FormBuilder) {       
}  
emails:any=[
  {
    email:'one'
  },
  {
    email:'2'
  },
  {
    email:'3'
  }    
]
  ngOnInit(): void {
  }
  onChange(email:string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.nameForm.controls.useremail;
  
    if(isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
  }
  print(){
    console.log(this.nameForm.value)
  }

  arr: Array<string> = [];
 
  onCheckboxChange(e) {
    if (e.target.checked) {
      this.arr.push(e.target.value);
    } else {
      let i: number = 0;
      this.arr.forEach((item) => {
        if (item == e.target.value) {
          this.arr.splice(i, 1);

          return;
        }
        i++;
      });
    }
  }
}
