import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  data:any={role:['admin','admin']};
  
  constructor() {
    localStorage.setItem('token', JSON.stringify(this.data));
  }
  
  
}
