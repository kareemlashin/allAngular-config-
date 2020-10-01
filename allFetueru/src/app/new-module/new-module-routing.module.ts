import { NavComponent } from './../test-moduel/nav/nav.component';
import { ThreeComponent } from './../test-moduel/three/three.component';
import { TwoComponent } from './../test-moduel/two/two.component';
import { OneComponent } from './../test-moduel/one/one.component';
import { MainComponent } from './main/main.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'navs',component:NavComponent},
    {path:'one',component:OneComponent},
    {path:'two',component:TwoComponent},
    {path:'three',component:ThreeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewModuleRoutingModule { }
