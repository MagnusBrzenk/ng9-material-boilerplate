import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //
  faBars = faBars;
  faCog = faCog;

  @Output()
  openSidenav: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  _openSideNav() {
    this.openSidenav.emit();
  }
}
