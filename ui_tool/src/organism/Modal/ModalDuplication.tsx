import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalDuplicationContent } from '@molecule/Modal/ModalDuplicationContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import { initalize, clearModalState } from '@store/slice/sliceModal';

interface props {
  onCancel: () => void;
  id: number;
}

export const ModalDuplication = ({ onCancel, id }: props) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const pagesData = useSelector((state: RootState) => state.pagesinfo);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const modalData = pagesData.find((el) => el.id === id);
    if (modalData)
      dispatch(
        initalize({
          id: modalData.id,
          title: modalData.title,
          url: modalData.path,
        })
      );

    return () => {
      console.log('cleanup');
      dispatch(clearModalState());
    };
  }, []);
  // usePreventMouseWheel();
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
