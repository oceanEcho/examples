import React from 'react';
import { useQuery } from 'react-query';

import styles from './styles.module.scss';

export default function Gallery() {
  const { data } = useQuery('getPictures', () =>
    fetch('https://picsum.photos/v2/list?limit=10').then((res) => res.json())
  );

  return (
    <section className={styles.Gallery}>
      {data &&
        !!data.length &&
        data.map((item: any) => {
          return (
            <img
              src={item.download_url}
              key={item.id}
              width={320}
              height={256}
              alt={`Author: ${item.author}`}
              className={styles.Image}
            />
          );
        })}
    </section>
  );
}
