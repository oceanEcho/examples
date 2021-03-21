import React, { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
};
