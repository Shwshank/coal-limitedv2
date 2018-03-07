import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Section1Component } from './home/section1/section1.component';
import { Section2Component } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';
import { Section4Component } from './home/section4/section4.component';
import { APIService } from './service/APIService';
import { ProjectService } from './service/ProjectService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule,
    HttpModule
  ],
  providers: [
    APIService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
