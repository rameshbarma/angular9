import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import  { DashComponent } from './dashboard/dashboard.component';
import  { HeroComponent } from './heros/heros.component';
import { AddsearchComponent } from './addsearch/addsearch.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { HeroService } from './data/heroservices.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    HeroComponent,
    AddsearchComponent,
    HerodetailsComponent
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
