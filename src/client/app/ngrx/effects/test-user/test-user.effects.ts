import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import {
  TestUsersLoaded,
  TestUsersLoadFailed,
  AddTestUser,
  ETestUserActionTypes
} from '../../actions/test-user.actions';
import { TestDataService } from '../../../core/services/test-data/test-data.service';

@Injectable()
export class TestUserEffects {
  @Effect()
  loadTestUsers$: Observable<any> = this.actions$.pipe(
    ofType(ETestUserActionTypes.LoadTestUsers),
    map(data => {
      console.log('Effects pipeline pinged');
      return data;
    }),
    mergeMap(action =>
      this.dataService.getUsers().pipe(
        // If successful, dispatch success action with result
        map(data => {
          console.log('Effects pipeline pinged 2');
          return new TestUsersLoaded(Array.isArray(data) ? data : [data]);
        }),
        // If request fails, dispatch failed action
        catchError(err => of(new TestUsersLoadFailed(err)))
      )
    )
  );

  constructor(private actions$: Actions<AddTestUser>, private dataService: TestDataService) {}
}
