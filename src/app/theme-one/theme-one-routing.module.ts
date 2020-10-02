import { AvatarComponent } from './avatar/avatar.component';
import { CardsComponent } from './cards/cards.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';


const routes: Routes = [
  {
    path:'',component:MainComponent,
    children:[
      {path:'',redirectTo:'cards',pathMatch:'full'},
      {path:'cards',component:CardsComponent},
      {path:'avatar',component:AvatarComponent},
      {path:'widget',component:WidgetComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeOneRoutingModule { }
