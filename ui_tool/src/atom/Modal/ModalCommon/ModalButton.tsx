// interface ModalButtonProps {
//   onCancel: () => void;
// }
// { onCancel }: ModalButtonProps
export const ModalButton = () => {
  return (
    <div className="w-[614px] h-[53px] flex">
      <button
        className="text-grayscale-0 bg-grayscale-800 grow text-body1B rounded-bl-[10px] hover:bg-grayscale-700"
        // onClick={onCancel}
      >
        닫기
      </button>
      <button className="text-grayscale-0 bg-primary-950 grow text-body1B rounded-br-[10px] hover:bg-primary-800">
        확인
      </button>
    </div>
  );
};
