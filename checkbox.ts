/*
<p>e-form works!</p>
<form [formGroup]="nameForm" (ngSubmit)="print()">
    <input formControlName="name" required /> formGroupName="personalData"
    <div *ngIf="nameForm.controls.name.errors != null && nameForm.controls.name.touched">error
        <div *ngIf="nameForm.controls.name.invalid" class="alert alert-danger">name is invalid.</div>
        <div *ngIf="nameForm.controls.name.dirty" class="alert alert-danger">Email address is dirty.</div>
        <div *ngIf="nameForm.controls.name.errors?.pattern" class="alert alert-danger">Email address is pattern.</div>
        <div *ngIf="nameForm.errors?.pattern">
            User name not valid.
        </div>
    </div>

    <input formControlName="age" />
    <input formControlName="color" /> <input formControlName="mobile" />
    <input formControlName="email" /> <input formControlName="mobile" />

    <div formGroupName="personalData" novalidate>
        <input formControlName="email" /> <input formControlName="mobile" />
        <select formControlName="country">
            <option value="one">one</option>
            <option value="two">one</option>
            <option value="three">one</option>
            <option value="four">one</option>
        </select>

    </div>
    <div>
        <input type="radio" formControlName="radio" value="one" name="radio">
        <input type="radio" formControlName="radio" value="two" name="radio">
    </div>
    <div *ngFor="let data of emails">
        <input type="checkbox" (change)="onChange(data.email, $event.target.checked)"> {{data.email}}<br>
    </div>
    <button [disabled]="!nameForm.valid">ok</button>
</form>

*/
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