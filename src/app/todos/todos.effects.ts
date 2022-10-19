import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as TodosActions from './todos.actions';
import {todosData} from '../interface/ExistedData';


@Injectable()
export class TodosEffects {

  loadTodoss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.loadTodoss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        of(todosData).pipe(
          map(data => TodosActions.loadTodossSuccess({ data })),
          catchError(error => of(TodosActions.loadTodossFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions) { }
}
