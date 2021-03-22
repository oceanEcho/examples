import React, { FC, SVGProps } from 'react';

import { HomeIcon } from './Icons/HomeIcon';
import { InfoIcon } from './Icons/InfoIcon';
import { TrashIcon } from './Icons/TrashIcon';
import { CameraIcon } from './Icons/CameraIcon';

const iconsMap = {
  Home: HomeIcon,
  Info: InfoIcon,
  Trash: TrashIcon,
  Camera: CameraIcon,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof iconsMap;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = iconsMap[name];

  return <IconComponent {...props} />;
};
