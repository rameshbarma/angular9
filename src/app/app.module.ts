import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { IftrueDirective } from './directive/ifture.component';
import { ExponentialStrengthPipe } from './pipe/name.pipe';
import { AddPipe } from './pipe/addpipe.pipe';
import { NoopInterceptor } from './interceptors/http-interceptors';
import { LoaderComponent } from './loadercomponent/loader.component';
import { Loaderservices} from './loadercomponent/lader.services';
import { DynamicComponent} from './dynamicdata/dynamic.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    HeroComponent,
    AddsearchComponent,
    HerodetailsComponent,
    HeroinfoComponent,
    HighlightDirective,
    IftrueDirective,
    ExponentialStrengthPipe,
    AddPipe,
    LoaderComponent,
    DynamicComponent
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HeroService, Loaderservices, { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
