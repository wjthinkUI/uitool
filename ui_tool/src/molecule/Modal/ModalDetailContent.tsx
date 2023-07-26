import { InputPageInfo } from '@atom/Input/InputPageInfo';

export const ModalDetailContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <InputPageInfo type="short" placeholder="페이지명" />
        <InputPageInfo type="short" placeholder="pageURL" />
      </div>
      <div className="m-3 mb-5 ml-5">http://www.wjthinkbig.com/page</div>
    </>
  );
};
