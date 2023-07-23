import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalContainer';
import { ModalDetailContent } from '@molecule/Modal/ModalDetailContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { ModalTitle } from '@atom/Modal/ModalTitle';
const ModalDetailPortal = () => {
  return (
    <ModalContainer height="low">
      <ModalTitle title="페이지 상세" />
      <ModalDetailContent />
      <ModalButton />
    </ModalContainer>
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
