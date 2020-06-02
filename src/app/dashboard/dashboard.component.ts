import { Component } from '@angular/core';
import { HeroService } from '../data/heroservices.component';


@Component({
  selector: 'dash-board',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashComponent {
  boarditems:any =[];
  myCondtion;
  
  constructor(private heroService: HeroService) {

  }
  ngOnInit() {
    this.heroService.getdata().subscribe((data:any) =>{
      console.log(data);
      function random_item(data)
{
  let result=[];
  for(let i=0;i<4;i++){
   let a=data[Math.floor(Math.random()*data.length)];
   result.push(a)
   console.log(a);
  }
return result;
     
}
//console.log(random_item(data));

const item=random_item(data);
console.log(item);
      this.boarditems = item;
    });
  }
 
 toggle(){
   console.log(this.myCondtion);
   this.myCondtion = !this.myCondtion;
 }
}

