import { InputPageSelector } from '@atom/Input/InputPageSelector';
import { InputPageInfo } from '@atom/Input/InputPageInfo';

export const ModalDuplicationContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <InputPageInfo type="title" inputWidth="short" placeholder="페이지명" />
        <InputPageSelector />
      </div>
      <div className="m-3 mb-5 ml-5">http://www.wjthinkbig.com/page</div>
    </>
  );
};
