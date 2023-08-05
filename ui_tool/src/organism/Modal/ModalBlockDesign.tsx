import { ModalBlockDesignHeader } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignHeader';
import { ModalBlockDesignContainer } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignContainer';
import { ModalBlockDesignSideBar } from '@molecule/Modal/ModalBlockDesign/ModalBlockDesignSideBar';
import { ModalBlockDesignWrapper } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignWrapper';
import { useSelectBlockDesign } from '@hooks/useSelectBlockDesign';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { useEffect } from 'react';
import { selectBlockIndex } from '@store/slice/sliceEditPage';
interface ModalBlockDesignProps {
  blockIndex: number;
}
export const ModalBlockDesign = ({ blockIndex }: ModalBlockDesignProps) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(selectBlockIndex(blockIndex));
  }, []);
  const { selectedDesign, selectedType } = useSelectBlockDesign();
  return (
    <>
      {/* {createPortal(<ModalBackDrop />, modalElement)} */}
      {createPortal(
        <ModalBlockDesignContainer>
          <ModalBlockDesignHeader onCancel={() => {}} />
          <div className="flex">
            <ModalBlockDesignSideBar />
            <div className="flex justify-center grow">
              <ModalBlockDesignWrapper type={selectedType}>
                {selectedDesign}
              </ModalBlockDesignWrapper>
            </div>
          </div>
        </ModalBlockDesignContainer>,
        modalElement
      )}
    </>
  );
};
