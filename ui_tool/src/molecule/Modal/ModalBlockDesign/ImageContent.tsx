import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import type { BlockDesignContent } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
import { modalToggle } from '@store/slice/sliceModalToggle';
export const ImageContent = ({ list, type }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const blockIndex = useSelector(
    (state: RootState) => state.modalToggle.selectedBlockIndex
  );

  const handleDispatch = (contentLayout: number, type: string) => {
    console.log(
      'contentLayout = ',
      contentLayout,
      'type = ',
      type,
      'blockIndex =',
      blockIndex
    );
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
      {list.length === 0 && <div>Loading...</div>}
      {list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() => handleDispatch(el.contentLayout, type)}
          >
            <ModalBlockDesignMediumBox key={el.id}>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignMediumBox>
          </span>
        ))}
    </>
  );
};
