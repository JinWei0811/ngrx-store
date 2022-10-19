import * as fromUserProfile from './user-profile.reducer';
import { selectUserProfileState } from './user-profile.selectors';

describe('UserProfile Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserProfileState({
      [fromUserProfile.userProfileFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
