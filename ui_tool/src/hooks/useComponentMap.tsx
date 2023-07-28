/**
 * 실험중
 */

import { CardCircle } from '@atom/Card/CardCircle';
import React from 'react';
export const useComponentMap = (ComponentName: string) => {
  const data = ComponentMap.filter((el) => el.name === ComponentName)[0];

  let el;
  if (data) {
    el = React.cloneElement(data.element(), {
      description: 'this is test desc',
    });
  }

  return { el };
};

const ComponentMap = [
  {
    name: 'CardCircle',
    element() {
      return <CardCircle />;
    },
  },
];
