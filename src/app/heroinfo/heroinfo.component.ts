import { Component, OnInit , Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'hero-info',
  templateUrl: './heroinfo.component.html',
  styleUrls: ['./heroinfo.component.css'] 
})
export class HeroinfoComponent implements OnInit, OnChanges {
  @Input() name: any;
  @Input() id: any;
  @Output() remove = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  removeitem(e, id){
    e.stopPropagation();
    this.remove.emit(id);
  }
  ngOnChanges(change){
   
    if(change.name.previousValue){
 this.name= "i am not change"+this.name;
  }
}
}
