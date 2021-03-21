import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';
import { addTodo, setTodo } from './actions';
import { todosSelector } from './reducer';

import styles from './styles.module.scss';

export const Home = () => {
  const todoList = useSelector(todosSelector);
  const dispatch = useDispatch();

  const onAddTodo = (text: string) => {
    dispatch(
      addTodo({
        id: uuid(),
        text,
        active: true,
      })
    );
  };

  const onTodoClick = (id: string) => dispatch(setTodo(id));

  return (
    <section className={styles.Home}>
      <h1>To do</h1>
      <AddTodoForm onAddTodo={onAddTodo} />
      {!todoList.length && <p>Nothing to do...</p>}
      <TodoList todoList={todoList} onTodoClick={onTodoClick} />
    </section>
  );
};
