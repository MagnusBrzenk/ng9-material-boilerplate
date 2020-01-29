import { Action } from '@ngrx/store';
import { TestEntityActions, ETestEntityActionTypes } from '../../actions/test-entity.actions';

export interface ITestEntitySubstate {
  testEntities: string[];
}

export const initialState: ITestEntitySubstate = {
  testEntities: []
};

export function testEntityReducer(
  state = initialState,
  action: TestEntityActions
): ITestEntitySubstate {
  switch (action.type) {
    case ETestEntityActionTypes.AddTestEntity:
      return {
        ...state,
        testEntities: [...state.testEntities, action.testEntity]
      };

    case ETestEntityActionTypes.RemoveTestEntity:
      return {
        ...state,
        testEntities: state.testEntities.filter(el => el !== action.testEntity)
      };

    default:
      return state;
  }
}
