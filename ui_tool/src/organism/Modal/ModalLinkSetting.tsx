import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalContainer';
import { ModalLinkSettingContent } from '@molecule/Modal/ModalLinkSettingContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { ModalTitle } from '@atom/Modal/ModalTitle';
const ModalLinkSettingPortal = () => {
  return (
    <ModalContainer height="high">
      <ModalTitle title="링크 설정" />
      <ModalLinkSettingContent />
      <ModalButton />
    </ModalContainer>
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
