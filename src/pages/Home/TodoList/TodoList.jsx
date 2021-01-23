import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

const TodoListItem = ({ children, active, onClick }) => {
  return (
    <li className={cn(styles.TodoListItem, { [styles.InactiveTodoListItem]: !active })} onClick={onClick}>
      {children}
    </li>
  );
};

export const TodoList = ({ todoList, onTodoClick }) => {
  return (
    <ul className={styles.TodoList}>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} active={todo.active} onClick={() => onTodoClick(todo.id)}>
          {todo.text}
        </TodoListItem>
      ))}
    </ul>
  );
};
