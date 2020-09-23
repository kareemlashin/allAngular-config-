import { ErorInterceptor } from './shared/eror.interceptor';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule  } from "./shared/material";
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './main/main.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxPaginationModule,
    HttpClientModule,
    InfiniteScrollModule,
    CarouselModule
  ],
  providers: [AuthGuard,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:ErorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
