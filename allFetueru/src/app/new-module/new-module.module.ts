import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModuleRoutingModule } from './new-module-routing.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { TestModuelModule } from '../test-moduel/test-moduel.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { MainComponent } from './main/main.component';
import { ThreeComponent } from './three/three.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [NewComponentComponent, OneComponent, TwoComponent, MainComponent, ThreeComponent, NavComponent],
  imports: [
    CommonModule,
    NewModuleRoutingModule,
    // todo import module in this module
    TestModuelModule
  ]
})
export class NewModuleModule { }
