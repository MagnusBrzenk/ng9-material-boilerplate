import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output()
  closeSideNav = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  _closeSideNav() {
    this.closeSideNav.emit();
  }
}
