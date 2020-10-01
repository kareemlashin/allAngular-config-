import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-d-view-child',
  templateUrl: './d-view-child.component.html',
  styleUrls: ['./d-view-child.component.scss']
})
export class DViewChildComponent implements OnInit {
  @ViewChild('pRef') pRef: ElementRef;
  @ViewChild('name') name:ElementRef;
  @ViewChild('x') x:ElementRef;

  @ViewChild("name2") nameall:ElementRef;

  @ViewChild('ff') ff:ElementRef;
  ngAfterViewInit() {
  this.pRef.nativeElement.innerHTML = "DOM updated successfully!!!";
  this.nameall.nativeElement.innerHTML="DO DO DEO";
  this.ff.nativeElement.innerHTML="FFFFFFFFFFFFFFFFFFFFFFFFFF";
}


constructor(private renderer: Renderer2, private elem: ElementRef){}
 nameclass(params:any) {
  const elements = this.elem.nativeElement.querySelectorAll('.x');
  elements.forEach(element => {
    element.style.color="#09c"
});

let el = document.getElementsByClassName('x');
Array.from(el).forEach(x=>x.classList.add("hidden"))

} 

new:Array<any>=[1,2,3,4,5];
x2:Array<any>=[6,7,8,9,10];
all:Array<any>=this.new.concat(this.x2);

  ngOnInit(): void {
  }

}
