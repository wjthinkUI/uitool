import { createPortal } from 'react-dom';
import usePreventMouseWheel from '../hooks/usePreventMouseWheel';
interface ModalChildrenProps extends cancelProps {
  modalContentElement: React.ReactNode;
  title: string;
  height: 'min' | 'max';
}
interface ModalProps {
  children: React.ReactNode;
  onCancel: () => void;
  title: string;
  height: 'min' | 'max'; //각각 316px, 387px 로 설정함
}

interface cancelProps {
  onCancel: () => void;
}

const BackDrop = ({ onCancel }: cancelProps) => {
  return (
    <div
      className="fixed top-0 left-0 z-10 w-full h-screen backdrop-brightness-75"
      onClick={onCancel}
    />
  );
};

const ModalContent = ({
  modalContentElement,
  title,
  height,
  onCancel,
}: ModalChildrenProps) => {
  return (
    <div
      className={`z-50  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[614px] bg-grayscale-0 rounded-[10px] flex flex-col justify-between ${
        height === 'min' ? ' h-[316px]' : ' h-[387px]'
      }`}
    >
      <div className="m-5 mt-7">
        <div className="text-h3">{title}</div>
        {modalContentElement}
      </div>
      <div className="w-[614px] h-[53px] flex">
        <button
          className="text-grayscale-0 bg-grayscale-800 grow text-body1B rounded-bl-[10px] hover:bg-grayscale-700"
          onClick={onCancel}
        >
          닫기
        </button>
        <button className="text-grayscale-0 bg-primary-950 grow text-body1B rounded-br-[10px] hover:bg-primary-800">
          확인
        </button>
      </div>
    </div>
  );
};

const LinkSettingModal = ({
  children,
  onCancel,
  title,
  height,
}: ModalProps) => {
  let modalElement = document.getElementById('modal') as HTMLElement;
  usePreventMouseWheel();

  return (
    <>
      {createPortal(<BackDrop onCancel={onCancel} />, modalElement)}
      {createPortal(
        <ModalContent
          modalContentElement={children}
          title={title}
          height={height}
          onCancel={onCancel}
        />,
        modalElement
      )}
    </>
  );
};

export default LinkSettingModal;
