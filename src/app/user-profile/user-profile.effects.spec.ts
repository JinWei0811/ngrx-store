import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserProfileEffects } from './user-profile.effects';

describe('UserProfileEffects', () => {
  let actions$: Observable<any>;
  let effects: UserProfileEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserProfileEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserProfileEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
