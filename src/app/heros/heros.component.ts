import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HeroService } from '../data/heroservices.component';

@Component({
  selector: 'heros-part',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HeroComponent {
  heros = []
  profileForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
  });
  
  constructor(private heroService: HeroService) {

   }
   ngOnInit() {
    this.heroService.getdata();
    this.heros=this.heroService.getdata();
  }

 

    submitHandeler(){
      console.log(this.profileForm.value)
      this.heros=this.heros.concat(this.profileForm.value);
      
      this.profileForm.reset();
    }

    delete(hero): void {
   this.heros=this.heros.filter(item =>{
     console.log(item.id !== hero.id);
     
     return item.id !== hero.id;
    
   });
   console.log(this.heros)
     // delete this.heros;
    }
  
}


