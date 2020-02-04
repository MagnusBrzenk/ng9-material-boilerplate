import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map, withLatestFrom } from 'rxjs/operators';
import { LocalStorageService } from 'src/client/app/core/services/local-storage/local-storage.service';
import { ESiteSettingsActionTypes, SetSiteSettings } from '../../actions/site-settings.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

@Injectable()
export class SiteSettingsEffects {
  @Effect()
  loadSiteSettings$: Observable<any> = this.actions$.pipe(
    ofType(ESiteSettingsActionTypes.LoadSiteSettingsFromLocalStorage),
    map(data => {
      // console.log('Effects pipeline pinged');
      const lss = this.localStorageService.getLocalStorageState();
      return new SetSiteSettings(lss);
    })
  );

  @Effect({ dispatch: false })
  updateLocalStorage$: Observable<any> = this.actions$.pipe(
    ofType(
      ESiteSettingsActionTypes.SetSiteSettings,
      ESiteSettingsActionTypes.SetSiteTheme,
      ESiteSettingsActionTypes.SetIsPageAnimated
    ),
    map(data => {
      // console.log('data');
      return data;
    }),

    withLatestFrom(this.store$),
    map(data => {
      const siteSettingsSubstate = data[1].siteSettingsSubstate;
      this.localStorageService.setItem('siteTheme', siteSettingsSubstate.siteTheme);
    })
  );

  constructor(
    private actions$: Actions<any>,
    private localStorageService: LocalStorageService,
    private store$: Store<AppState>
  ) {}
}
