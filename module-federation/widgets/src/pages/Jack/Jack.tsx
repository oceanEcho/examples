import React, { ReactElement } from 'react';
import YouTube from 'react-youtube';

import styles from './styles.module.scss';

export default function Jack(): ReactElement {
  return (
    <section className={styles.Jack}>
      <YouTube videoId='x22F4hSdZJM' opts={{ height: '405', width: '720' }} />
    </section>
  );
}
