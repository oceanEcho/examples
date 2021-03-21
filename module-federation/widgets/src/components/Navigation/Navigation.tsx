import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from '../Icon';

import styles from './styles.module.scss';

export const Navigation: FC = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLink exact to='/' className={styles.NavLink} activeClassName={styles.ActiveNavLink}>
        <Icon name='Home' width={36} height={36} />
      </NavLink>
      <NavLink to='/about' className={styles.NavLink} activeClassName={styles.ActiveNavLink}>
        <Icon name='Info' width={36} height={36} />
      </NavLink>
    </nav>
  );
};
