import { ReactComponent as CloseIcon } from '@assets/icon_close_white.svg';

export const ModalBlockDesignHeader = () => {
  return (
    <div className="p-6 pl-10 pr-10 w-[1220px] h-20 bg-primary-950 rounded-t-[1.25rem] mb-11">
      <div className="flex justify-between ">
        <span className="text-h3 text-grayscale-0">블록 디자인 추가</span>
        <CloseIcon className="pb-3" />
      </div>
    </div>
  );
};
