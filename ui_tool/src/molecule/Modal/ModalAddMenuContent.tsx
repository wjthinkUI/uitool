import { InputPageSelector } from '@atom/Input/InputPageSelector';
import { InputPageInfo } from '@atom/Input/InputPageInfo';

export const ModalAddMenuContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <InputPageInfo type="title" inputWidth="short" placeholder="페이지명" />
        <InputPageSelector />
      </div>
    </>
  );
};
