import { AllPipeComponent } from './all-pipe/all-pipe.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACliComponent } from './a-cli/a-cli.component';
import { BBasicComponent } from './b-basic/b-basic.component';
// todo  all modules in angular
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// ? end
import { CAllDirectivesComponent } from './c-all-directives/c-all-directives.component';
import { CPassDataComponent } from './c-pass-data/c-pass-data.component';
import { DViewChildComponent } from './d-view-child/d-view-child.component';
import { EFormComponent } from './e-form/e-form.component';
import { TestModuelModule } from './test-moduel/test-moduel.module';
import { NewPipePipe } from './new-pipe.pipe';
import { ServComponent } from './serv/serv.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuardGuard } from './service/auth-guard.guard';
@NgModule({
  declarations: [
    AppComponent,
    ACliComponent,
    BBasicComponent,
    CAllDirectivesComponent,
    CPassDataComponent,
    DViewChildComponent,
    EFormComponent,
    AllPipeComponent,
    NewPipePipe,
    ServComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
         // ! - 1 - import Module 
         // ? use selector

    TestModuelModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
