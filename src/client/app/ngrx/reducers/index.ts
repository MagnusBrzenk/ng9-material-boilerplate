import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { testEntityReducer, ITestEntitySubstate } from './test-entity/test-entity.reducer';
import { ITestUserSubstate, testUserReducer } from './test-user/test-user.reducer';
import { ISiteSettingsSubstate, siteSettingsReducer } from './site-settings/site-settings.reducer';

export const stateFeatureKey = 'state';

export interface AppState {
  testEntitySubstate: ITestEntitySubstate;
  testUserSubstate: ITestUserSubstate;
  siteSettingsSubstate: ISiteSettingsSubstate;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  testEntitySubstate: testEntityReducer,
  testUserSubstate: testUserReducer,
  siteSettingsSubstate: siteSettingsReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
