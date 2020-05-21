import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HeroService } from '../data/heroservices.component';

@Component({
  selector: 'heros-part',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HeroComponent {
  heros:any = []
  profileForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
  });
  
  constructor(private heroService: HeroService) {

   }
   isLoading =true;
   error;
   ngOnInit() {
    // this.heroService.getdata();
    // this.heroService.getdata().subscribe((data:any)=>{
    //   //this.hero.name=data.title;
    //   console.log(data);
    //   const heros = data.map(i => {
    //     i.name=i.title;
    //     return i;
    //   });
    //  this.heros = heros;
    
    // });
    this.heroService.getdata().subscribe((data:any) =>{
      console.log(data);
      this.isLoading=false;
      // const heros = data.map(a =>{
      //   //a.name = a.title;
      //   return a;
      // });
      this.heros =data;
    },(error)=>{
      this.isLoading=false;
      //console.log(error);
      this.error =error;
    })
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


