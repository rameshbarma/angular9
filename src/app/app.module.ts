import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import  { DashComponent } from './dashboard/dashboard.component';
import  { HeroComponent } from './heros/heros.component';
import { AddsearchComponent } from './addsearch/addsearch.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { HeroService } from './data/heroservices.component';
import { HeroinfoComponent } from './heroinfo/heroinfo.component';
import { HighlightDirective } from './directive/custom.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    HeroComponent,
    AddsearchComponent,
    HerodetailsComponent,
    HeroinfoComponent,
    HighlightDirective
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
