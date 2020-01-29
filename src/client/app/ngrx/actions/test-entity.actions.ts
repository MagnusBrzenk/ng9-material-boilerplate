import { Action } from '@ngrx/store';

export enum ETestEntityActionTypes {
  AddTestEntity = '[TestEntity] Add TestEntities',
  RemoveTestEntity = '[TestEntity] Remove TestEntities'
}

export class AddTestEntity implements Action {
  readonly type = ETestEntityActionTypes.AddTestEntity;
  constructor(public testEntity: string) {}
}

export class RemoveTestEntity implements Action {
  readonly type = ETestEntityActionTypes.RemoveTestEntity;
  constructor(public testEntity: string) {}
}

export type TestEntityActions = AddTestEntity | RemoveTestEntity;
