import { ModalButton } from '../../atom/Modal/ModalButton';
import { ModalWrapper } from '../../atom/Modal/ModalWrapper';
import { ModalDetailContent } from '../../molecule/Modal/ModalDetailContent';
import { ModalBackDrop } from '../../atom/Modal/ModalBackDrop';
import { createPortal } from 'react-dom';
import { usePreventMouseWheel } from '../../hooks/usePreventMouseWheel';

const ModalDetailPortal = () => {
  return (
    <ModalWrapper>
      <ModalDetailContent />
      <ModalButton />
    </ModalWrapper>
  );
};

export const ModalDetail = () => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  usePreventMouseWheel();
  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(<ModalDetailPortal />, modalElement)}
    </>
  );
};
