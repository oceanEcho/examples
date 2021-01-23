import React from 'react';

import styles from './styles.module.scss';

export const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
};
