// import { ModalButton } from '../../atom/Modal/ModalButton';
// import { ModalContainer } from '../../atom/Modal/ModalContainer';
// import { ModalDetailContent } from '../../molecule/Modal/ModalDetailContent';
// import { ModalBackDrop } from '../../atom/Modal/ModalBackDrop';
// import { usePreventMouseWheel } from '../../hooks/usePreventMouseWheel';

import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalContainer';
import { ModalDetailContent } from '@molecule/Modal/ModalDetailContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';

const ModalDetailPortal = () => {
  return (
    <ModalContainer>
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
