import { createAction, props } from '@ngrx/store';
import { Todo, TodoState } from '../interface/TodoState';

export const loadTodoss = createAction(
  '[Todos] Load Todoss'
);

export const loadTodossSuccess = createAction(
  '[Todos] Load Todoss Success',
  props<{ data: TodoState }>()
);

export const loadTodossFailure = createAction(
  '[Todos] Load Todoss Failure',
  props<{ error: any }>()
);

export const changeTodoLoad = createAction(
  '[Todos] Loading Change',
  props<{ data: TodoState }>()
)

export const createTodo = createAction(
  '[Todos] Crate Todo',
  props<{ data: TodoState, todo: Todo }>()
)


export const fetchTodos = createAction(
  `[Todos] Load Todos`
)

export const deleteTodo = createAction(
  '[Todos] Delete Todo',
  props<{ todo: Todo, }>()
)