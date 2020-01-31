import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { ITestUserSubstate } from '../reducers/test-user/test-user.reducer';

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
