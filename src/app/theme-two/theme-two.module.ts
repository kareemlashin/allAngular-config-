import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeTwoRoutingModule } from './theme-two-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { WidgetComponent } from './widget/widget.component';
import { CardsComponent } from './cards/cards.component';
import { AvatarComponent } from './avatar/avatar.component';


@NgModule({
  declarations: [MainComponent, NavComponent, WidgetComponent, CardsComponent, AvatarComponent],
  imports: [
    CommonModule,
    ThemeTwoRoutingModule
  ]
})
export class ThemeTwoModule { }
