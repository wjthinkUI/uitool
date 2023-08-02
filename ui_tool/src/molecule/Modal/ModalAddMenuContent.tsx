import { InputPageSelector } from '@atom/Input/InputPageSelectorPublic';
import { InputFormPublic } from '@atom/Input/InputFormPublic';

export const ModalAddMenuContent = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <InputFormPublic type="title" inputWidth="short" placeholder="페이지명" onChangeValue={() => console.log('모달(메뉴추가) 수정해라')} />
        <InputPageSelector defaultValue={''} onChangeUrl={() => console.log('모달(메뉴추가) 수정해라')} />
      </div>
    </>
  );
};
