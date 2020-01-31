import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SiteSettingsEffects } from './site-settings.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';

describe('SiteSettingsEffects', () => {
  let actions$: Observable<any>;
  let effects: SiteSettingsEffects;

  let store: MockStore<AppState>;
  const initialState: Partial<AppState> = {
    siteSettingsSubstate: { siteTheme: 'DARK-THEME', isPageAnimated: true }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SiteSettingsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState })
      ]
    });

    effects = TestBed.get<SiteSettingsEffects>(SiteSettingsEffects);

    store = TestBed.get<Store<any>>(Store);
  });

  it('should be created ', () => {
    expect(effects).toBeTruthy();
  });
});
