import { PropsWithChildren } from 'react';
import type { ModalContainerProps } from 'types';

export const ModalContainer = ({
  children,
  height,
}: PropsWithChildren<ModalContainerProps>) => {
  return (
    <div
      className={`modal__center w-[614px] bg-grayscale-0 rounded-[10px] flex flex-col justify-between z-50 ${
        height === 'low' ? 'h-[316px]' : 'h-[387px]'
      } `}
    >
      {children}
    </div>
  );
};
