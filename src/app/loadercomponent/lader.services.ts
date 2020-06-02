import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class Loaderservices{
isLoading = new Subject();
show(){
    console.log('show loader');
    this.isLoading.next(true);
}
hide(){
    console.log('hide loader');
    this.isLoading.next(false);
}
}