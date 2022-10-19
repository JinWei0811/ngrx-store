import { Action, createReducer, on } from '@ngrx/store';
import * as UserProfileActions from './user-profile.actions';

export const userProfileFeatureKey = 'userProfile';

export interface State {
  isLoading: boolean,
  profile: {
    name: string;
    age: number;
    interests: string[]
  }
}

export const initialState: State = {
  isLoading: false,
  profile: {
    name: 'Mike',
    age: 18,
    interests: ['Angular', 'RxJS', 'NgRx']
  }
};

export const reducer = createReducer(
  initialState,

  on(UserProfileActions.loadUserProfiles, state => state),
  on(UserProfileActions.loadUserProfilesSuccess, (state, action) => state),
  on(UserProfileActions.loadUserProfilesFailure, (state, action) => state),

);
