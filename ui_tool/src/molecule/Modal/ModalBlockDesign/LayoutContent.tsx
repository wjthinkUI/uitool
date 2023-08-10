import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { v4 as uuidv4 } from 'uuid';
import {
  updateBlockForNestedLayout,
  updateTypeAndContentLayout,
} from '@store/slice/sliceEditPage';
import { blockModalToggle } from '@store/slice/sliceModalToggle';
export const LayoutContent = ({ list, type }: any) => {
  const blockIndex = useSelector(
    (state: RootState) => state.modalToggle.selectedBlockIndex
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleDispatch = (
    contentLayout: number,
    numberOfLayout: number,
    type: string
  ) => {
    console.log('contentLayout = ', contentLayout, 'type = ', type);
    // dispatch(
    //   updateTypeAndContentLayout({
    //     index: blockIndex,
    //     type,
    //     contentLayout,
    //   })
    // );
    // dispatch(
    //   updateBlockForNestedLayout({
    //     index: blockIndex,
    //     type,
    //     contentLayout,
    //     numberOfLayout,
    //     groupId: uuidv4(),
    //   })
    // );
    dispatch(blockModalToggle());
  };

  return (
    <>
      {list.length === 0 && <div>Loading...</div>}
      {list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() =>
              handleDispatch(el.contentLayout, el.numberOfLayout, type)
            }
          >
            <ModalBlockDesignMediumBox key={el.id}>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignMediumBox>
          </span>
        ))}
    </>
  );
};
