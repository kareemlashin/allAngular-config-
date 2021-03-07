https://bezkoder.com/angular-11-multiple-file-upload/
https://www.itsolutionstuff.com/post/angular-11-multiple-file-upload-tutorialexample.html
https://morioh.com/p/ad5c092248dc
https://blog.angular-university.io/angular-file-upload/

<form [formGroup]="myForm" (ngSubmit)="submit()">



<div class="form-group">

    <label for="name">Name</label>

    <input formControlName="name" id="name" type="text" class="form-control">


</div>



<div class="form-group">

    <label for="file">File</label>

    <input id="file" type="file" class="form-control" multiple="" (change)="onFileChange($event)">


</div>



<img *ngFor='let url of images' [src]="url" height="150" width="200px" style="margin: 3px;"> <br/>



<button class="btn btn-primary" type="submit">Submit</button>

</form>

  images = [];

  myForm = new FormGroup({

   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   fileSource: new FormControl('', [Validators.required])

 });

 
 constructor() { }
 onFileChange(event) {

   if (event.target.files && event.target.files[0]) {
       var filesAmount = event.target.files.length;
       for (let i = 0; i < filesAmount; i++) {
         
               var reader = new FileReader();
               reader.onload = (event:any) => {
                  this.images.push(event.target.result); 

                  this.myForm.patchValue({
                     fileSource: this.images
                  });

               }
               reader.readAsDataURL(event.target.files[i]);
       }
   }
 }

   

 submit(){
   console.log(this.images)
   console.log(this.myForm.value);

 }
