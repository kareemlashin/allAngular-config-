https://www.itsolutionstuff.com/post/angular-11-file-upload-exampleexample.html
https://bezkoder.com/angular-11-file-upload/

<form [formGroup]="form" (ngSubmit)="add()">
    <input type="text" formControlName="name">
    <img [src]="url" height="200"> <br/>
    <input type='file' (change)="onSelectFile($event)" formControlName="image">
    <button>add</button>
</form>

  form=new FormGroup({
    name:new FormControl(),
    image:new FormControl()
  })
  title = 'app';
  url: any;
  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url =event.target.result;
          this.form.controls['image'].updateValueAndValidity(this.url);
        }
      }
  }
  add(){
    console.log(this.form.value)
  }
  
