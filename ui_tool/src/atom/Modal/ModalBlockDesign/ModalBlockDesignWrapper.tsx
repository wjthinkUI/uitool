import { PropsWithChildren } from 'react';
interface ModalBlockDesignWrapperProps {
  type: string;
}
export const ModalBlockDesignWrapper = ({
  children,
  type,
}: PropsWithChildren<ModalBlockDesignWrapperProps>) => {
  return (
    <div
      className={`flex w-[950px] h-fit items-center flex-wrap overflow-y-auto custom__scrollbar ${
        type === 'table' ? 'bg-grayscale-0 rounded-[10px]' : ''
      }`}
    >
      {children}
    </div>
  );
};
