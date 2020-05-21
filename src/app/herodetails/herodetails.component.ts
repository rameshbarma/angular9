import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { HeroService } from '../data/heroservices.component';


@Component({
  selector: 'heros-details',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})


export class HerodetailsComponent {
  hero:any = []
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService) {
      
  
  }
 
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.heroService.getdatabyid(id).subscribe((data:any)=>{
      // const hero = data.map(i => {
      //   i.name=i.title;
      //   return i;
      // });
      
      // data.name =data.title;
     this.hero = data;
    })
    // this.heroService.getdata();
    // const [hero] =this.heroService.getdata().filter(i =>{
    //  console.log(i)
    //  return i.id === id
      
    //  })
     
    
    
     //this.hero = hero;
    //console.log(this.hero)
  }

}
