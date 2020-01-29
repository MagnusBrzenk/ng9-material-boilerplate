import { TestUserActions, ETestUserActionTypes } from '../../actions/test-user.actions';
import { ITestUser } from 'src/client/app/models/user.model';

export interface ITestUserSubstate {
  testUsers: ITestUser[];
}

export const initialState: ITestUserSubstate = {
  testUsers: []
};

export function testUserReducer(state = initialState, action: TestUserActions): ITestUserSubstate {
  switch (action.type) {
    case ETestUserActionTypes.AddTestUser:
      return {
        ...state,
        testUsers: [...state.testUsers, action.testUser]
      };

    case ETestUserActionTypes.RemoveTestUser:
      return {
        ...state,
        testUsers: state.testUsers.filter(el => el !== action.testUser)
      };

    case ETestUserActionTypes.TestUsersLoaded:
      return {
        ...state,
        testUsers: state.testUsers
          .concat(action.users)
          .filter((obj, pos, arr) => arr.map(mapObj => mapObj.id).indexOf(obj.id) === pos)
        // N.b. using here an unverified filter for unique objects based on id property adapted from
        // https://ilikekillnerds.com/2016/05/removing-duplicate-objects-array-property-name-javascript/
      };

    case ETestUserActionTypes.TestUsersLoadFailed:
      return state;

    default:
      return state;
  }
}
