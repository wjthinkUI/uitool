import { PropsWithChildren } from 'react';
export const ModalBlockDesignSmallBox = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[457px] h-[97px] bg-grayscale-0 rounded-[10px] m-[5px] hover:border-4 hover:border-primary-950 cursor-pointer">
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};
