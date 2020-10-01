import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuelRoutingModule } from './test-moduel-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { NavComponent } from './nav/nav.component';
import { ThreeComponent } from './three/three.component';
import { MainComponent } from './main/main.component';
import {  ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [OneComponent, TwoComponent, NavComponent, ThreeComponent, MainComponent],
  imports: [
    CommonModule,
    TestModuelRoutingModule,
    ReactiveFormsModule
  ],exports:[OneComponent, TwoComponent, NavComponent, ThreeComponent, MainComponent 
     // ! - 1 - export component 
  ]
})
export class TestModuelModule { }
