import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import type { BlockDesignContent } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
export const ImageContent = ({ list, type }: any) => {
  const blockIndex = useSelector(
    (state: RootState) => state.editPage.selectedBlockIndex
  );
  const modalCancel = useSelector(
    (state: RootState) => state.sidebar.modalCancel
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleDispatch = (contentLayout: number, type: string) => {
    dispatch(
      updateTypeAndContentLayout({
        index: blockIndex,
        type,
        contentLayout,
      })
    );
    modalCancel();
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
