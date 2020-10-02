import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeOneRoutingModule } from './theme-one-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { WidgetComponent } from './widget/widget.component';
import { CardsComponent } from './cards/cards.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LoadingFourComponent } from './loading-four/loading-four.component';
import {NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';

@NgModule({
  declarations: [MainComponent, NavComponent, WidgetComponent, CardsComponent, AvatarComponent,LoadingFourComponent],
  imports: [
    CommonModule,
    ThemeOneRoutingModule,
    NbIconModule,               // <---------
    NbSidebarModule.forRoot(),  // <---------
    NbMenuModule.forRoot(),     // <---------
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule
  ]
})
export class ThemeOneModule { }
