import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalContainer';
import { ModalDuplicationContent } from '@molecule/Modal/ModalDuplicationContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { ModalTitle } from '@atom/Modal/ModalTitle';
const ModalDuplicationPortal = () => {
  return (
    <ModalContainer height="low">
      <ModalTitle title="페이지 복제" />
      <ModalDuplicationContent />
      <ModalButton />
    </ModalContainer>
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
