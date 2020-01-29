import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../ngrx/reducers';
import {
  LoadSiteSettingsFromLocalStorage,
  SetSiteTheme
} from '../ngrx/actions/site-settings.actions';
import { LocalStorageService } from '../core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-entry-root',
  templateUrl: './app-entry.component.html',
  styleUrls: ['./app-entry.component.scss']
})
export class AppEntryComponent {
  title = 'ng9-boilerplate';

  constructor(private localStorageService: LocalStorageService, private store: Store<State>) {
    //
    // Tasks for on-site loading
    //

    // Ensure local storage is setup with default values
    this.localStorageService.verifyAndRepairLocalStorageState();

    // Load localStorage settings into ngrx store
    this.store.dispatch(new LoadSiteSettingsFromLocalStorage());
  }

  _openSidenav() {
    console.log('Do sth');
  }
}
