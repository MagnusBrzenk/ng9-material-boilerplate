import { Component, OnInit } from '@angular/core';
import { AppState } from '../../ngrx/reducers';
import { Store } from '@ngrx/store';
import { SetSiteTheme } from '../../ngrx/actions/site-settings.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  //

  settings: any;

  constructor(private store: Store<AppState>) {
    // Start listening for changes
    this.store
      .select(state => state.siteSettingsSubstate)
      .subscribe(substate => (this.settings = JSON.stringify(substate)));
  }

  ngOnInit() {}

  onSubmitLight() {
    console.log('Light Button pressed');
    this.store.dispatch(new SetSiteTheme('LIGHT-THEME'));
  }
  onSubmitDark() {
    console.log('Dark Button pressed');
    this.store.dispatch(new SetSiteTheme('DARK-THEME'));
  }
}
