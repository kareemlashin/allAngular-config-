import { Component, OnInit } from '@angular/core';
import  localeAr  from "@angular/common/locales/ar-EG";

import { registerLocaleData } from '@angular/common';
import { Observable, Subscriber } from 'rxjs';
registerLocaleData(localeAr);
@Component({
  selector: 'app-all-pipe',
  templateUrl: './all-pipe.component.html',
  styleUrls: ['./all-pipe.component.scss']
})
export class AllPipeComponent implements OnInit {
  dateVal:Date=new Date();
  constructor() { }

  ngOnInit(): void {
  }
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
});
}
