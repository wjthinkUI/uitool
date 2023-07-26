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
      className={`flex justify-center w-[950px] h-[500px] flex-wrap overflow-y-auto custom__scrollbar ${
        type === 'table' ? 'bg-grayscale-0 rounded-[10px]' : ''
      }`}
    >
      {children}
    </div>
  );
};
