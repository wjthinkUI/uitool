import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalDuplicationContent } from '@molecule/Modal/ModalDuplicationContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
interface props {
  onCancel: () => void;
  id: number;
}

export const ModalDuplication = ({ onCancel, id }: props) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  usePreventMouseWheel();
  return (
    <>
      {createPortal(<ModalBackDrop onCancel={onCancel} />, modalElement)}
      {createPortal(
        <ModalContainer height="low">
          <ModalTitle title="페이지 복제" />
          <ModalDuplicationContent />
          <ModalButton onCancel={onCancel} method="POST" />
        </ModalContainer>,
        modalElement
      )}
    </>
  );
};
