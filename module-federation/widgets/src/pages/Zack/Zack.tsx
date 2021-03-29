import React, { ReactElement } from 'react';
import YouTube from 'react-youtube';

import styles from './styles.module.scss';

export default function Zack(): ReactElement {
  return (
    <section className={styles.Zack}>
      <YouTube videoId='-ei6RqZilYI' opts={{ height: '405', width: '720' }} />
    </section>
  );
}
