import { createAction, props } from '@ngrx/store';

export const loadUserProfiles = createAction(
  '[UserProfile] Load UserProfiles'
);

export const loadUserProfilesSuccess = createAction(
  '[UserProfile] Load UserProfiles Success',
  props<{ data: any }>()
);

export const loadUserProfilesFailure = createAction(
  '[UserProfile] Load UserProfiles Failure',
  props<{ error: any }>()
);
