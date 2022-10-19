import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserProfile from './user-profile.reducer';

export const selectUserProfileState = createFeatureSelector<fromUserProfile.State>(
  fromUserProfile.userProfileFeatureKey
);
