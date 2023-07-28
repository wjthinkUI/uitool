import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalLinkSettingContent } from '@molecule/Modal/ModalLinkSettingContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
const ModalLinkSettingPortal = () => {
  return (
    <ModalContainer height="high">
      <ModalTitle title="링크 설정" />
      <ModalLinkSettingContent />
      <ModalButton onCancel={() => {}} />
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
