import { ReactComponent as IconMaginStick } from '@assets/icon/icon_magicStick.svg';
import type { AddBlock } from 'types';
import { useEffect, useState } from 'react';
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign';

interface EditAddSelectDesignProps {
  key: number;
  block_id: number;
}

export const EditAddSelectDesign = ({
  key,
  block_id,
}: EditAddSelectDesignProps) => {
  const [modal, setModal] = useState(false);
  const ReDesignSelect = () => {
    setModal(true);
    console.log(block_id, '블록아이디')
  };
  return (
    <div
      onClick={ReDesignSelect}
      className="h-[160px] select-none flex flex-col bg-grayscale-50 text-grayscale-400 items-center justify-center border-dashed border-2 border-grayscale-800 hover:bg-gray-200"
    >
      <IconMaginStick />
      디자인을 선택하세요{`${block_id}`}
      {/* {(modal) ? <ModalBlockDesign blockIndex={index} closeModal={closeModal}/>:null} */}
      {modal && (
        <ModalBlockDesign
          blockIndex={block_id}
          closeModal={() => setModal(false)}
        />
      )}
    </div>
  );
};
