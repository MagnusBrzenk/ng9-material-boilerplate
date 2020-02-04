import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { ITestUserSubstate } from '../reducers/test-user/test-user.reducer';
import { ISiteSettingsSubstate } from '../reducers/site-settings/site-settings.reducer';

/**
 *
 * Memoized Selectors
 *
 * See: https://ngrx.io/guide/store/selectors
 *
 */

export const selectTestUserList = createSelector(
  (state: AppState) => state.testUserSubstate,
  (substate: ITestUserSubstate) => substate.testUsers
);

export const selectTestUserEveryOtherList = createSelector(
  (state: AppState) => state.testUserSubstate,
  (substate: ITestUserSubstate) => substate.testUsers.filter((el, ind) => ind % 2 !== 0)
);

export const selectSiteTheme = createSelector(
  (state: AppState) => state.siteSettingsSubstate,
  (substate: ISiteSettingsSubstate) => substate.siteTheme
);
