import { ReactComponent as IconPencil } from '@assets/icon/icon_EditPencil.svg';
import { ReactComponent as IconReset } from '@assets/icon/icon_EditReset.svg';
import { ReactComponent as IconUp } from '@assets/icon/icon_EditUp.svg';
import { ReactComponent as IconDown } from '@assets/icon/icon_EditDown.svg';
import { ReactComponent as IconTrashCan } from '@assets/icon/icon_EditTrashCan.svg';
import { ToolsPropsType } from 'types';
import {
  moveUpBlock,
  moveDownBlock,
  deleteBlock,
  updateTypeAndContentLayout,
} from '@store/slice/sliceEditPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useState } from 'react';
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign';

/** onClick 설정 필요 */
export const EditToolsBox = ({ block_id }: ToolsPropsType) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  //   console.log('BLOCK ID = ', block_id);
  const pageData = useSelector((state: RootState) => state.editPage);
  const Write = (block_id: number) => {};
  const ReDesignSelect = () => {
    // console.log(block_id);
    setModal(true);
  };
  const MoveUp = (block_id: number) => {
    console.log('moveup', block_id);
    if (block_id === 0) return;
    dispatch(moveUpBlock({ index: block_id }));
  };
  const MoveDown = (block_id: number) => {
    console.log('movedown', block_id);
    if (block_id >= pageData.page.length) return;
    dispatch(moveDownBlock({ index: block_id }));
  };
  const Trash = (block_id: number) => {
    if (pageData.page.length === 1) {
      dispatch(
        updateTypeAndContentLayout({
          index: 0,
          type: 'initial',
          contentLayout: 0,
        })
      );
    } else if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteBlock({ index: block_id }));
    }
  };

  return (
    <div className="absolute top-[30px] right-[100px] w-[246px] h-[54px] rounded-full bg-grayscale-600 hidden group-hover:flex z-20 justify-evenly pr-4 pl-4">
      <button onClick={() => console.log('write')}>
        <IconPencil className="fill-white hover:fill-primary-900" />
      </button>
      <button onClick={ReDesignSelect}>
        <IconReset className="fill-white hover:fill-primary-900" />
      </button>
      <button onClick={() => MoveUp(block_id)}>
        <IconUp className="fill-white hover:fill-primary-900" />
      </button>
      <button onClick={() => MoveDown(block_id)}>
        <IconDown className="fill-white hover:fill-primary-900" />
      </button>
      <button onClick={() => Trash(block_id)}>
        <IconTrashCan className="fill-white hover:fill-primary-900" />
      </button>
      {modal && (
        <ModalBlockDesign
          blockIndex={block_id}
          closeModal={() => setModal(false)}
        />
      )}
    </div>
  );
};
