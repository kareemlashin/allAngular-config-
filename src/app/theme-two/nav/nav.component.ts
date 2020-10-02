import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  dir:any="rtl";
  dirChange(){
    if (this.dir=="rtl") {
      this.dir="ltr"
    }else{
      this.dir="rtl"

    }
  }
  constructor(private readonly sidebarService: NbSidebarService) {
  }
  
  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
  items: NbMenuItem[] = [
    {
      title: 'cards',
      icon: 'folder-outline',
      link: '/cards',
    },
    {
      title: 'widget',
      icon: 'credit-card-outline',
      link: '/widget'
    }
    ,
    {
      title: 'avatar',
      icon: 'attach-2-outline',
      link: '/avatar'
    }
  ];
}
