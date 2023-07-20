import { PropsWithChildren } from 'react';

//PropsWithChildren<ModalWrapperProps>
export const ModalWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={
        'z-50  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[614px] bg-grayscale-0 rounded-[10px] flex flex-col justify-between h-[316px] h-max-[387px]'
      }
    >
      {children}
    </div>
  );
};
