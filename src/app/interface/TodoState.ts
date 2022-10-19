export interface TodoState {
    todoItems: Todo[];
}

export interface Todo {
    text: string;
    done: boolean;
}