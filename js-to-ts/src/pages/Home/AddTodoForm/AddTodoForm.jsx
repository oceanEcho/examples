import React, { useState } from 'react';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './styles.module.scss';

export const AddTodoForm = ({ onAddTodo }) => {
  const [todoInputValue, setTodoInputValue] = useState('');

  const handleTodoFormSubmit = (e) => {
    e.preventDefault();
    if (todoInputValue) {
      onAddTodo(todoInputValue);
      setTodoInputValue('');
    }
  };

  return (
    <form onSubmit={handleTodoFormSubmit} className={styles.AddTodoForm}>
      <Input value={todoInputValue} placeholder='Write task...' onChange={setTodoInputValue} />
      <Button type='submit'>Add</Button>
    </form>
  );
};
