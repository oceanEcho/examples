import React from 'react';

import styles from './styles.module.scss';

export const Input = ({ value, placeholder, onChange }) => {
  return (
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={styles.Input}
    />
  );
};
