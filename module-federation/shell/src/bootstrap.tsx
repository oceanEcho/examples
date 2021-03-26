import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { config } from './config';

import './index.scss';

config.init().then(() => {
  render(<App />, document.getElementById('root'));
});
