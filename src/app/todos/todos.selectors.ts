import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../interface/TodoState';
import * as fromTodos from './todos.reducer';

export const selectTodosState = createFeatureSelector<TodoState>(
  fromTodos.todosFeatureKey
);

export const selectTodoItem = createSelector(
  selectTodosState,
  (state) => state.todoItems
)

export const selectTodoCount = createSelector(
  selectTodoItem,
  (todoItem) => todoItem.length
)
