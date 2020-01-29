import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { testEntityReducer, ITestEntitySubstate } from './test-entity/test-entity.reducer';
import { ITestUserSubstate, testUserReducer } from './test-user/test-user.reducer';
import { ISiteSettingsSubstate, siteSettingsReducer } from './site-settings/site-settings.reducer';

export const stateFeatureKey = 'state';

export interface State {
  testEntitySubstate: ITestEntitySubstate;
  testUserSubstate: ITestUserSubstate;
  siteSettingsSubstate: ISiteSettingsSubstate;
}

export const reducers: ActionReducerMap<State> = {
  testEntitySubstate: testEntityReducer,
  testUserSubstate: testUserReducer,
  siteSettingsSubstate: siteSettingsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
