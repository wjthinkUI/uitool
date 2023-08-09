import { InputFormPublic } from '@atom/Input/InputFormPublic';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setTitle, setUrl } from '@store/slice/sliceModal';
export const ModalDetailContent = () => {
  const data = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(event.target.value));
  };
  const handleUrl = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUrl(event.target.value));
  };

  return (
    <>
      {data !== undefined && (
        <>
          <div className="flex flex-col items-center">
            <InputFormPublic
              type="title"
              inputWidth="short"
              placeholder="페이지명"
              defaultValue={data.title}
              onChangeValue={handleTitle}
            />
            <InputFormPublic
              type="url"
              inputWidth="short"
              placeholder="pageURL"
              defaultValue={data.url}
              onChangeValue={handleUrl}
            />
          </div>
          <div className="m-3 ml-7">https://www.wjthinkbig.com/{data.url}</div>
        </>
      )}
    </>
  );
};
