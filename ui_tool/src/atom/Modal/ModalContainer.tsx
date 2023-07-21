import { PropsWithChildren } from 'react';

//PropsWithChildren<ModalWrapperProps>
export const ModalContainer = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={
        'modal__center w-[614px] bg-grayscale-0 rounded-[10px] flex flex-col justify-between h-[316px] h-max-[387px]'
      }
    >
      {children}
    </div>
  );
};
