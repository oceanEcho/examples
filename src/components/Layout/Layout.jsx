import React from 'react';

import styles from './styles.module.scss';

export const Layout = ({ children, sidebarContent }) => {
  return (
    <div className={styles.Layout}>
      <aside className={styles.Sidebar}>{sidebarContent}</aside>
      <main className={styles.Container}>{children}</main>
    </div>
  );
};
