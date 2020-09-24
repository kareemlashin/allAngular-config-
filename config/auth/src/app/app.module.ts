import { AuthInterceptor } from './Interceptors';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {  HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { PageinationComponent } from './pageination/pageination.component';

import {  NgxPaginationModule} from "ngx-pagination";
// pagination 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    InfiniteScrollModule
  ],
  providers: [AuthGuard,   {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
