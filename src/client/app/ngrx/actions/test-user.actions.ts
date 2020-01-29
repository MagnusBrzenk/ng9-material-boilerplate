import { Action } from '@ngrx/store';
import { ITestUser } from 'src/client/app/models/user.model';

export enum ETestUserActionTypes {
  AddTestUser = '[TestUser] Add UserEntities',
  RemoveTestUser = '[TestUser] Remove UserEntities',
  LoadTestUsers = '[TestUser] Load UserEntities',
  TestUsersLoaded = '[TestUser] TestUsers Loaded',
  TestUsersLoadFailed = '[TestUser] TestUsers Load Failed'
}

export class AddTestUser implements Action {
  readonly type = ETestUserActionTypes.AddTestUser;
  constructor(public testUser: ITestUser) {}
}

export class RemoveTestUser implements Action {
  readonly type = ETestUserActionTypes.RemoveTestUser;
  constructor(public testUser: ITestUser) {}
}

export class LoadTestUsers implements Action {
  readonly type = ETestUserActionTypes.LoadTestUsers;
  constructor() {}
}

export class TestUsersLoaded implements Action {
  readonly type = ETestUserActionTypes.TestUsersLoaded;
  constructor(public users: ITestUser[]) {}
}

export class TestUsersLoadFailed implements Action {
  readonly type = ETestUserActionTypes.TestUsersLoadFailed;
  constructor(public error: any) {}
}

export type TestUserActions =
  | AddTestUser
  | RemoveTestUser
  | LoadTestUsers
  | TestUsersLoaded
  | TestUsersLoadFailed;
