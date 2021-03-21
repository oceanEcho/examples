import React, { FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ type = 'text', value, placeholder, onChange }) => {
  return <input type={type} value={value} placeholder={placeholder} onChange={onChange} className={styles.Input} />;
};
