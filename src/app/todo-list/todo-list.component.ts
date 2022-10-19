import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo, TodoState } from '../interface/TodoState';
import { loadTodoss, createTodo, fetchTodos, deleteTodo } from '../todos/todos.actions';
import { selectTodosState } from '../todos/todos.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  data: TodoState;
  todo_id: number;
  todo_text: string;
  constructor(private store: Store) { }

  ngOnInit(): void {
    /**
     * observe Store
     */
    // this.store.select(selectTodosState).subscribe(console.log);

    /**
     * Total Content
     */
    this.store
      .select(selectTodosState)
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }

  onClickLoadTodos() {
    this.store.dispatch(loadTodoss());
  }

  onClickCreateTodoss() {
    let newTodo = {
      text: this.todo_text,
      done: false,
    } as Todo;
    this.todo_text = '';
    this.store.dispatch(createTodo({ data: this.data, todo: newTodo }));
  }

  onClickDeleteTodo(text: string) {
    let delTodo = {
      text: text,
      done: false
    }
    this.store.dispatch(deleteTodo({ todo: delTodo }));
  }
}
