import { Component } from '@angular/core';


@Component({
  selector: 'nav-part',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  navIteams = ['dashboard','heros', 'addsearch'];
  selecteditem = '';

  selected(item) {
      console.log(item);
      this.selecteditem = item;
}
}

