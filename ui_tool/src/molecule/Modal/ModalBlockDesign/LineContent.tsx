import { useState, useEffect } from 'react';
import { ModalBlockDesignSmallBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignSmallBox';
import type { BlockDesignContent } from 'types';

export const LineContent = ({ list }: { list: BlockDesignContent[] }) => {
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
            <ModalBlockDesignSmallBox>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignSmallBox>
          </span>
        ))}
    </>
  );
};
