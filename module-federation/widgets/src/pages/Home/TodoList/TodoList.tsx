import React, { FC } from 'react';
import cn from 'classnames';

import { Todo } from '../types';

import styles from './styles.module.scss';

interface TodoListItemProps {
  active: boolean;
  onClick: () => void;
}

const TodoListItem: FC<TodoListItemProps> = ({ children, active, onClick }) => {
  return (
    <li className={cn(styles.TodoListItem, { [styles.InactiveTodoListItem]: !active })} onClick={onClick}>
      {children}
    </li>
  );
};

interface TodoListProps {
  todoList: Todo[];
  onTodoClick: (id: string) => void;
}

export const TodoList: FC<TodoListProps> = ({ todoList, onTodoClick }) => {
  return (
    <ul className={styles.TodoList}>
      {todoList.map((todo: Todo) => (
        <TodoListItem key={todo.id} active={todo.active} onClick={() => onTodoClick(todo.id)}>
          {todo.text}
        </TodoListItem>
      ))}
    </ul>
  );
};
