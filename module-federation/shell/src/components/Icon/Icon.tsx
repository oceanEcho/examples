import React, { FC, SVGProps } from 'react';

import { HomeIcon } from './Icons/HomeIcon';
import { InfoIcon } from './Icons/InfoIcon';
import { TrashIcon } from './Icons/TrashIcon';

const iconsMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  Home: HomeIcon,
  Info: InfoIcon,
  Trash: TrashIcon,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof iconsMap;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = iconsMap[name];

  return <IconComponent {...props} />;
};
