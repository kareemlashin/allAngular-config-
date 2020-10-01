import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-c-pass-data',
  templateUrl: './c-pass-data.component.html',
  styleUrls: ['./c-pass-data.component.scss']
})
export class CPassDataComponent implements OnInit {
@Input() itemChild:string;
@Input() dataRes:string;
@Input() x:string;
@Input() n:string;
@Input() person: any;
@Input('master') masterName: string;
@Output() toParent:EventEmitter<string>=new EventEmitter<string>();
@Output() nameNew:EventEmitter<string>=new EventEmitter<string>();
@Output()  eventName:EventEmitter<string> = new EventEmitter<string>();
@Output() public eventName3:EventEmitter<string> = new EventEmitter<string>();
send():void{
  this.toParent.emit(`kareem lashin`);
}
go($event){
this.nameNew.emit($event.target.value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
