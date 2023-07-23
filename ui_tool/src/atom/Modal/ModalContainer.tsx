import { PropsWithChildren } from 'react';

interface ModalContainerProps {
  height: 'high' | 'low';
}

export const ModalContainer = ({
  children,
  height,
}: PropsWithChildren<ModalContainerProps>) => {
  return (
    <div
      className={`modal__center w-[614px] bg-grayscale-0 rounded-[10px] flex flex-col justify-between ${
        height === 'low' ? 'h-[316px]' : 'h-[387px]'
      } `}
    >
      {children}
    </div>
  );
};
