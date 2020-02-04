import { Component, OnInit } from '@angular/core';
import { AppState } from '../../ngrx/reducers';
import { Store } from '@ngrx/store';
import { SetSiteTheme } from '../../ngrx/actions/site-settings.actions';
import { TPermittedTheme } from '../../models/site-settings.model';

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

  onSubmitTheme(input: TPermittedTheme) {
    this.store.dispatch(new SetSiteTheme(input));
  }
}
