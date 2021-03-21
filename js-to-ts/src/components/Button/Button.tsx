import React, { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

export const Button: FC<IButtonProps> = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
};
