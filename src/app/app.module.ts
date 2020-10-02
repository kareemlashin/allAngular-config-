import { AuthGuard } from './AuthGuard';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import {  MaterialModule} from "./shared/allModuels";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {ErrorIntercept} from './ErrorIntercept'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbIconModule,               // <---------
    NbSidebarModule.forRoot(),  // <---------
    NbMenuModule.forRoot(),     // <---------
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS , useClass: ErrorIntercept, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
