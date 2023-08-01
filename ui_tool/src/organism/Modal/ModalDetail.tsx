import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalButton } from '@atom/Modal/ModalCommon/ModalButton';
import { ModalContainer } from '@atom/Modal/ModalCommon/ModalContainer';
import { ModalDetailContent } from '@molecule/Modal/ModalDetailContent';
import { ModalBackDrop } from '@atom/Modal/ModalBackDrop';
import { ModalTitle } from '@atom/Modal/ModalCommon/ModalTitle';
import { usePreventMouseWheel } from '@hooks/usePreventMouseWheel';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { clearModalState, initalize } from '@store/slice/sliceModal';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
interface props {
  onCancel: () => void;
  id: number;
}

export const ModalDetail = ({ onCancel, id }: props) => {
  const modalElement = document.getElementById('modal') as HTMLElement;
  const dispatch = useDispatch<AppDispatch>();
  const pageData = useSelector((state: RootState) => state.pagesinfo);
  useEffect(() => {
    //id값을 통해 pages store에서 제목과 경로값 조회 ->
    //modal store 상태값 설정
    if (pageData) {
      const modalData = pageData.find((el) => el.id === id);
      if (modalData) {
        dispatch(
          initalize({
            id: modalData?.id,
            title: modalData?.title,
            url: modalData?.path,
          })
        );
      }
    }

    return () => {
      console.log('cleanup');
      dispatch(clearModalState());
    };
  }, []);
  usePreventMouseWheel();
  return (
    <>
      {createPortal(<ModalBackDrop onCancel={onCancel} />, modalElement)}
      {createPortal(
        <ModalContainer height="low">
          <ModalTitle title="페이지 상세" />
          <ModalDetailContent />
          <ModalButton onCancel={onCancel} method="PUT" />
        </ModalContainer>,
        modalElement
      )}
    </>
  );
};
