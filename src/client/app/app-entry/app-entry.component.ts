import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/reducers';
import {
  LoadSiteSettingsFromLocalStorage,
  SetSiteTheme
} from '../ngrx/actions/site-settings.actions';
import { LocalStorageService } from '../core/services/local-storage/local-storage.service';
import { TPermittedTheme } from '../models/site-settings.model';
import { selectSiteTheme } from '../ngrx/selectors';

@Component({
  selector: 'app-entry-root',
  templateUrl: './app-entry.component.html',
  styleUrls: ['./app-entry.component.scss']
})
export class AppEntryComponent {
  title = 'ng9-boilerplate';

  siteTheme: TPermittedTheme;

  constructor(private localStorageService: LocalStorageService, private store: Store<AppState>) {
    //
    // Tasks for on-site-loading event
    //

    // Ensure local storage is setup with default values
    this.localStorageService.verifyAndRepairLocalStorageState();

    // Load localStorage settings into ngrx store
    this.store.dispatch(new LoadSiteSettingsFromLocalStorage());

    // Set sitetheme
    this.store.select(selectSiteTheme).subscribe(siteTheme => (this.siteTheme = siteTheme));
  }

  _openSidenav() {
    console.log('Do sth');
  }
}
