import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { 
    localStorage.setItem('auth','ok');

  }

  ngOnInit(): void {
    localStorage.setItem('auth','ok');
  }
  auth(){
    localStorage.setItem('auth','ok');

  }

}
