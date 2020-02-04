import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers';
import { selectSiteTheme } from '../../ngrx/selectors';
import { TPermittedTheme, permittedThemes } from '../../models/site-settings.model';
import { SetSiteTheme } from '../../ngrx/actions/site-settings.actions';
import { MatSelectChange } from '@angular/material';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  //

  selectedSiteTheme: TPermittedTheme;
  routeAnimationsElements = '';
  permittedThemes = permittedThemes.filter(el => el !== 'DEFAULT-THEME');

  constructor(private store: Store<AppState>) {
    this.store
      .select(selectSiteTheme)
      .pipe(take(1))
      .subscribe(siteTheme => {
        this.selectedSiteTheme = siteTheme;
      });
  }

  ngOnInit() {
    setTimeout(() => {
      // This shouldnt make a difference but it does cause refresh of component!!!
    }, 0);
  }

  onThemeSelect(choice: MatSelectChange) {
    this.store.dispatch(new SetSiteTheme(choice.value));
  }
}
