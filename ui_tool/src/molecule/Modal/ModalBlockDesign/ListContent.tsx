import type { BlockDesignContent } from 'types';
import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
import { modalToggle } from '@store/slice/sliceModalToggle';
export const ListContent = ({
  list,
  type,
}: {
  list: BlockDesignContent[];
  type: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const blockIndex = useSelector(
    (state: RootState) => state.editPage.selectedBlockIndex
  );
  const handleDispatch = (contentLayout: number, type: string) => {
    console.log('contentLayout = ', contentLayout, 'type = ', type);
    dispatch(
      updateTypeAndContentLayout({
        index: blockIndex,
        type,
        contentLayout,
      })
    );
    dispatch(modalToggle());
  };
  return (
    <>
      {list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() => handleDispatch(el.contentLayout, type)}
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
