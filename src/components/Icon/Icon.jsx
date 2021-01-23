import React from 'react';

import Home from './Icons/HomeIcon';
import Info from './Icons/InfoIcon';
import Trash from './Icons/TrashIcon';

const iconsMap = {
  Home,
  Info,
  Trash,
};

export const Icon = ({ name, ...props }) => {
  const IconComponent = iconsMap[name];

  return <IconComponent {...props} />;
};
