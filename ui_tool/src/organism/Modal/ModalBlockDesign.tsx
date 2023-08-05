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
import { closeBlockDesignModal } from '@store/slice/sliceBlockDesignSideBar';
interface ModalBlockDesignProps {
  blockIndex: number;
  closeModal: () => void;
}
export const ModalBlockDesign = ({
  blockIndex,
  closeModal,
}: ModalBlockDesignProps) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(selectBlockIndex(blockIndex));
    dispatch(closeBlockDesignModal(closeModal));
  }, []);
  const { selectedDesign, selectedType } = useSelectBlockDesign();
  return (
    <>
      {createPortal(<ModalBackDrop onCancel={closeModal} />, modalElement)}
      {createPortal(
        <ModalBlockDesignContainer>
          <ModalBlockDesignHeader onCancel={closeModal} />
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
