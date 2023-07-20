import { PropsWithChildren } from 'react';

// interface ModalWrapperProps {
//   height: 'min' | 'max';
// }

//PropsWithChildren<ModalWrapperProps>
export const ModalWrapper = ({
  //   height,
  children,
}: PropsWithChildren) => {
  const height = 'min';
  return (
    <div
      className={`z-50  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[614px] bg-grayscale-0 rounded-[10px] flex flex-col justify-between ${
        height === 'min' ? ' h-[316px]' : ' h-[387px]'
      }`}
    >
      {children}
    </div>
  );
};
