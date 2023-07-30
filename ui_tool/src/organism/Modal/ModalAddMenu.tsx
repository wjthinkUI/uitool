import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { ModalAddMenuContent } from '@molecule/Modal/ModalAddMenuContent';
interface props {
  onCancel: () => void;
}

export const ModalAddMenu = ({ onCancel }: props) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  usePreventMouseWheel();
  return (
    <>
      {createPortal(<ModalBackDrop onCancel={onCancel} />, modalElement)}
      {createPortal(
        <ModalContainer height="low">
          <ModalTitle title="메뉴 항목 추가" />
          <ModalAddMenuContent />
          <ModalButton onCancel={onCancel} method="POST" />
        </ModalContainer>,
        modalElement
      )}
    </>
  );
};
