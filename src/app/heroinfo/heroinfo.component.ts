import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'hero-info',
  templateUrl: './heroinfo.component.html',
  styleUrls: ['./heroinfo.component.css']
})
export class HeroinfoComponent implements OnInit {
  @Input() name: any;
  @Input() id: any;

  constructor() { }

  ngOnInit(): void {
  }

}
