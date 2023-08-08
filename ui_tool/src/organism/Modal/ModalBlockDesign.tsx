import { ModalBlockDesignHeader } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignHeader';
import { ModalBlockDesignContainer } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignContainer';
import { ModalBlockDesignSideBar } from '@molecule/Modal/ModalBlockDesign/ModalBlockDesignSideBar';
import { ModalBlockDesignWrapper } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignWrapper';
import { useSelectBlockDesign } from '@hooks/useSelectBlockDesign';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { createPortal } from 'react-dom';

export const ModalBlockDesign = () => {
  const modalElement = document.getElementById('modal') as HTMLElement;

  const { selectedDesign, selectedType } = useSelectBlockDesign();
  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(
        <ModalBlockDesignContainer>
          <ModalBlockDesignHeader />
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
