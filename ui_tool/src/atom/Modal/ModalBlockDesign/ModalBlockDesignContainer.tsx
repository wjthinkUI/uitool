import { PropsWithChildren } from 'react';

export const ModalBlockDesignContainer = ({ children }: PropsWithChildren) => {
  return (
    <section
      className="bg-grayscale-50 w-[1220px] h-[673px] flex-shrink-0 rounded-[1.25rem] modal__center
      "
    >
      {children}
    </section>
  );
};
