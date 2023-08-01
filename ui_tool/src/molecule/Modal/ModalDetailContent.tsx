import { InputPageInfo } from '@atom/Input/InputPageInfo';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
export const ModalDetailContent = () => {
  const url = useSelector((state: RootState) => state.modal.url);
  return (
    <>
      <div className="flex flex-col items-center">
        <InputPageInfo
          type="title"
          inputWidth="short"
          placeholder="페이지명"
          isLoadValue={true}
        />
        <InputPageInfo
          type="url"
          inputWidth="short"
          placeholder="pageURL"
          isLoadValue={true}
        />
      </div>
      <div className="m-3 ml-7">http://{url}</div>
    </>
  );
};
