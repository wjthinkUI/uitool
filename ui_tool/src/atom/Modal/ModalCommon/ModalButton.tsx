import { useSubmit } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
interface ModalButtonProps {
  onCancel: () => void;
  method: 'PUT' | 'POST';
}

export const ModalButton = ({ onCancel, method }: ModalButtonProps) => {
  const submit = useSubmit();
  const data = useSelector((state: RootState) => state.modal);
  // console.log(data);
  const submitHandler = () => {
    // '/adminList/page' 페이지 action 함수로 전달 -> db저장 -> 리덕스 스토어 업데이트
    submit(data, {
      method: method,
      action: '/adminlist/page',
      encType: 'application/json',
    });
    onCancel();
  };
  return (
    <div className="w-[614px] h-[53px] flex">
      <button
        className="text-grayscale-0 bg-grayscale-800 grow text-body1B rounded-bl-[10px] hover:bg-grayscale-700"
        onClick={onCancel}
      >
        닫기
      </button>
      <button
        className="text-grayscale-0 bg-primary-950 grow text-body1B rounded-br-[10px] hover:bg-primary-800"
        onClick={submitHandler}
      >
        확인
      </button>
    </div>
  );
};
