import { Action, createReducer, on } from '@ngrx/store';
import { todosData } from '../interface/ExistedData';
import { TodoState } from '../interface/TodoState';
import * as TodosActions from './todos.actions';
export const todosFeatureKey = 'todos';

// export const initialState: TodoState = todosData;

export const initialState: TodoState = {
  todoItems: []
};


export const reducer = createReducer(
  initialState,

  on(TodosActions.loadTodoss, state => ({
    ...state,
  })),
  on(TodosActions.loadTodossSuccess, (state, action) => {
    return { todoItems: [...action.data.todoItems] };
  }),
  on(TodosActions.loadTodossFailure, (state, action) => state),
  on(TodosActions.createTodo, (state, action) => {
    let newTodos = [];
    if (action.data.todoItems != undefined) {
      for (var item of action.data.todoItems) {
        newTodos.push(item);
      }
    }
    newTodos.push(action.todo);
    return { todoItems: newTodos }
  }),
  on(TodosActions.deleteTodo, (state, action) => {
    let oriTodos = [...state.todoItems];
    let deleTodo = action.todo;

    let index = oriTodos.findIndex(v => v.text === deleTodo.text);
    if (index != -1) {
      oriTodos.splice(index, 1);
    }

    return { todoItems: oriTodos }
  })
);
