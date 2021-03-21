import React, { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface LayoutProps {
  sidebarContent: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, sidebarContent }) => {
  return (
    <div className={styles.Layout}>
      <aside className={styles.Sidebar}>{sidebarContent}</aside>
      <main className={styles.Container}>{children}</main>
    </div>
  );
};
