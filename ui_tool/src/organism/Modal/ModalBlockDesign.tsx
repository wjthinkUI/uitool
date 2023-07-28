import { ModalBlockDesignHeader } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignHeader';
import { ModalBlockDesignContainer } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignContainer';
import { ModalBlockDesignSideBar } from '@molecule/Modal/ModalBlockDesign/ModalBlockDesignSideBar';
import { ModalBlockDesignWrapper } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignWrapper';
import { useSelectBlockDesign } from '@hooks/useSelectBlockDesign';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { createPortal } from 'react-dom';

const ModalBlockDesignPortal = () => {
  const { selectedDesign, selectedType } = useSelectBlockDesign();
  return (
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
    </ModalBlockDesignContainer>
  );
};

export const ModalBlockDesign = () => {
  const modalElement = document.getElementById('modal') as HTMLElement;

  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(<ModalBlockDesignPortal />, modalElement)}
    </>
  );
};
