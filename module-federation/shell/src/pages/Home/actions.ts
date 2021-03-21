import { Todo } from './types';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  todo,
});

export const SET_TODO = 'SET_TODO';

export const setTodo = (id: string) => ({
  type: SET_TODO,
  id,
});
