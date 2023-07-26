import { PropsWithChildren } from 'react';

export const ModalBlockDesignLargeBox = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[924px] h-[482px] bg-grayscale-0 rounded-[10px] m-auto flex items-center justify-center">
      {children}
    </div>
  );
};
