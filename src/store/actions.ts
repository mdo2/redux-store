export const ADD_TODO = '[Todos] Add a new todo';
export const REMOVE_TODO = '[Todos] Remove an existing todo';

export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload) {}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload) {}
}