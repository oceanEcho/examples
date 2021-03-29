import React, { FC, useState } from 'react';

import { LazyService } from '../../components/LazyService';
import { Microservice } from '../../components/LazyService/types';
import { Loader } from '../../components/Loader';
import { Toggle } from '../../components/Toggle';
import { config } from '../../config';

import styles from './styles.module.scss';

export const Video: FC = () => {
  const [microservice, setMicroservice] = useState<Microservice>({
    url: config.microservices.widgets.url,
    scope: 'widgets',
    module: './Zack',
  });

  const toggleMicroservice = () => {
    if (microservice.module === './Zack') {
      setMicroservice({ ...microservice, module: './Jack' });
    }

    if (microservice.module === './Jack') {
      setMicroservice({ ...microservice, module: './Zack' });
    }
  };

  return (
    <>
      <div className={styles.ToggleContainer}>
        <Toggle onClick={toggleMicroservice} />
      </div>
      <LazyService microservice={microservice} loadingMessage={<Loader />} />
    </>
  );
};
