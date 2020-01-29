import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SiteSettingsEffects } from './site-settings.effects';

describe('SiteSettingsEffects', () => {
  let actions$: Observable<any>;
  let effects: SiteSettingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteSettingsEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<SiteSettingsEffects>(SiteSettingsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
