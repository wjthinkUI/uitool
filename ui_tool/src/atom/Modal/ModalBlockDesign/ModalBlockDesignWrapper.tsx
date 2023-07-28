import { PropsWithChildren } from 'react';
import type { ModalBlockDesignWrapperProps } from 'types';

export const ModalBlockDesignWrapper = ({
  children,
  type,
}: PropsWithChildren<ModalBlockDesignWrapperProps>) => {
  return (
    <div
      className={`flex items-center content-start w-[950px] h-[500px]  flex-wrap overflow-y-auto custom__scrollbar ${
        type === 'table' ? 'bg-grayscale-0 rounded-[10px]' : ''
      }`}
    >
      {children}
    </div>
  );
};
