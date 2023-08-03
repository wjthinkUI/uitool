import type { BlockDesignContent } from 'types';
import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import { useState, useEffect } from 'react';

export const TextContent = ({ list }: { list: BlockDesignContent[] }) => {
  const tempHandler = (id: number) => {
    console.log('clicked id = ', id);
  };

  return (
    <>
      {list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() => tempHandler(el.id)}
            className="w-fit h-fit"
          >
            <ModalBlockDesignMediumBox>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignMediumBox>
          </span>
        ))}
    </>
  );
};
