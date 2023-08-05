import { useState, useEffect } from 'react';
import { ModalBlockDesignSmallBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignSmallBox';
import type { BlockDesignContent } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';

export const LineContent = ({ list, type }: { list: BlockDesignContent[], type: any }) => {
  const blockIndex = useSelector(
    (state: RootState) => state.editPage.selectedBlockIndex
  );
  const dispatch = useDispatch<AppDispatch>();

  const tempHandler = (id: number) => {
    console.log('clicked id = ', id);
  };
  const handleDispatch = (contentLayout: number, type: string) => {
    dispatch(
      updateTypeAndContentLayout({
        index: blockIndex,
        type,
        contentLayout,
      })
    );
  };

  return (
    <>
      {list.length === 0 && <div>Loading...</div>}
      {list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() => handleDispatch(el.contentLayout, type)}
          >
            <ModalBlockDesignSmallBox>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignSmallBox>
          </span>
        ))}
    </>
  );
};
