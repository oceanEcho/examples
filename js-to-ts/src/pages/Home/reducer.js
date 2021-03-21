import { ADD_TODO, SET_TODO } from './actions';

const initialState = [
  { id: '1', text: 'Pet a cat', active: true },
  { id: '2', text: 'Invite a colleague to lunch', active: true },
  { id: '3', text: 'Fill time in Jira', active: true },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { todo } = action;

      const newTodoList = [...state];
      newTodoList.push(todo);

      return newTodoList;
    }

    case SET_TODO: {
      const { id } = action;

      const newTodoList = [...state];

      const selectedTodoIndex = state.findIndex((todo) => id === todo.id);

      if (selectedTodoIndex !== -1) {
        newTodoList[selectedTodoIndex] = {
          ...newTodoList[selectedTodoIndex],
          active: !state[selectedTodoIndex].active,
        };
      }

      return newTodoList;
    }

    default: {
      return state;
    }
  }
}

export const todosSelector = (state) => state.todos;
