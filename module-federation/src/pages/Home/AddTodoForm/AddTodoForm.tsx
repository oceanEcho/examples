import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react';

import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import styles from './styles.module.scss';

interface AddTodoFormProps {
  onAddTodo: (value: string) => void;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [todoInputValue, setTodoInputValue] = useState('');

  const handleTodoFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (todoInputValue) {
      onAddTodo(todoInputValue);
      setTodoInputValue('');
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleTodoFormSubmit} className={styles.AddTodoForm}>
      <Input value={todoInputValue} placeholder='Write task...' onChange={onChange} />
      <Button type='submit'>Add</Button>
    </form>
  );
};
