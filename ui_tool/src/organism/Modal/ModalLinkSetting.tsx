import { ModalButton } from '../../atom/Modal/ModalButton';
import { ModalWrapper } from '../../atom/Modal/ModalWrapper';
import { ModalLinkSettingContent } from '../../molecule/Modal/ModalLinkSettingContent';
import { ModalBackDrop } from '../../atom/Modal/ModalBackDrop';
import { createPortal } from 'react-dom';
import { usePreventMouseWheel } from '../../hooks/usePreventMouseWheel';

const ModalLinkSettingPortal = () => {
  return (
    <ModalWrapper>
      <ModalLinkSettingContent />
      <ModalButton />
    </ModalWrapper>
  );
};

export const ModalLinkSetting = () => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  usePreventMouseWheel();
  return (
    <>
      {createPortal(<ModalBackDrop />, modalElement)}
      {createPortal(<ModalLinkSettingPortal />, modalElement)}
    </>
  );
};
