export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const SET_TODO = 'SET_TODO';

export const setTodo = (id) => ({
  type: SET_TODO,
  id,
});
