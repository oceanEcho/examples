import React, { FC, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ToggleProps {
  onClick?: () => void;
}

export const Toggle: FC<ToggleProps> = ({ onClick }) => {
  const [on, setOn] = useState(false);

  const handleClick = () => {
    setOn(!on);

    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={cn(styles.Toggle, { [styles.ToggleOn]: on })} onClick={handleClick}>
      <div className={styles.ToggleCircle}></div>
    </div>
  );
};
