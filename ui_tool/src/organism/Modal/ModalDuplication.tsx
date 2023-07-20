import { ModalButton } from '../../atom/Modal/ModalButton';
import { ModalWrapper } from '../../atom/Modal/ModalWrapper';
import { ModalDuplicationContent } from '../../molecule/Modal/ModalDuplicationContent';
import { ModalBackDrop } from '../../atom/Modal/ModalBackDrop';
import { createPortal } from 'react-dom';
import { usePreventMouseWheel } from '../../hooks/usePreventMouseWheel';

const ModalDuplicationPortal = () => {
  return (
    <ModalWrapper>
      <ModalDuplicationContent />
      <ModalButton />
    </ModalWrapper>
  );
};

export const ModalDuplication = () => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  usePreventMouseWheel();
  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(<ModalDuplicationPortal />, modalElement)}
    </>
  );
};
