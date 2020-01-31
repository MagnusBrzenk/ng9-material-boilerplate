import { Component, OnInit } from '@angular/core';
import { ITestUser, TestUser } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers';
import { AddTestUser, LoadTestUsers } from '../../ngrx/actions/test-user.actions';
import { selectTestUserList, selectTestUserEveryOtherList } from '../../ngrx/selectors';

@Component({
  selector: 'app-test-more-users',
  templateUrl: './test-more-users-page.component.html',
  styleUrls: ['./test-more-users-page.component.scss']
})
export class TestMoreUsersPageComponent implements OnInit {
  users: ITestUser[];
  everyOtherUser: ITestUser[];

  constructor(private store: Store<AppState>) {
    store.select(selectTestUserList).subscribe(testUsers => (this.users = testUsers));
    store
      .select(selectTestUserEveryOtherList)
      .subscribe(testUsers => (this.everyOtherUser = testUsers));

    // store
    //   .select(state => state.testUserSubstate)
    //   .subscribe(testUserSubstate => (this.users = testUserSubstate.testUsers));
  }

  addUser(username: string) {
    this.store.dispatch(new AddTestUser(new TestUser({ username })));
  }

  ngOnInit() {
    this.store.dispatch(new LoadTestUsers());
  }
}
