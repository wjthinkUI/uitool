import { InputPageSelect } from '@atom/Input/InputPageSelect';
import { InputPageInfo } from '@atom/Input/InputPageInfo';

export const ModalDuplicationContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <InputPageInfo type="short" placeholder="페이지명" />
        <InputPageSelect />
      </div>
      <div className="m-3 mb-5 ml-5">http://www.wjthinkbig.com/page</div>
    </>
  );
};
