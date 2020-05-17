import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { DashComponent } from './dashboard/dashboard.component';
import { HeroComponent } from './heros/heros.component';
import { AddsearchComponent } from './addsearch/addsearch.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';


const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'heros', component: HeroComponent },
  { path: 'addsearch', component: AddsearchComponent },
  { path: 'detail/:id', component: HerodetailsComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
