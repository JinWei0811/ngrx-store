import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UserProfileActions from './user-profile.actions';


@Injectable()
export class UserProfileEffects {

  loadUserProfiles$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(UserProfileActions.loadUserProfiles),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => UserProfileActions.loadUserProfilesSuccess({ data })),
          catchError(error => of(UserProfileActions.loadUserProfilesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
