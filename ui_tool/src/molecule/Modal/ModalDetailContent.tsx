import { InputFormPublic } from '@atom/Input/InputFormPublic';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTitle, setUrl } from '@store/slice/sliceModal';
export const ModalDetailContent = () => {
  const data = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const [defaultData, setDefaultData] = useState({ id: 0, title: '', url: '' });
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [changeTitle, setChangeTitle] = useState<string>('');
  const [changeUrl, setChangeUrl] = useState<string>('');

  useEffect(() => {
    setDefaultData(() => data);
    // setPreviewUrl(() => data.url.slice(1));
  }, [data]);
  
  useEffect(() => {
  console.log('해당 모달 데이터', defaultData)
  }, [defaultData])
  
  const handleTitle = (title: string) => {
    setChangeTitle(title);
    dispatch(setTitle(changeTitle));
  };
  const handleUrl = (url: string) => {
    setChangeUrl(url);
    dispatch(setUrl(changeUrl));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <InputFormPublic
          type="title"
          inputWidth="short"
          placeholder="페이지명"
          defaultValue={defaultData.title}
          onChangeValue={handleTitle}
        />
        <InputFormPublic
          type="url"
          inputWidth="short"
          placeholder="pageURL"
          defaultValue={defaultData.url}
          onChangeValue={handleUrl}
        />
      </div>
      <div className="m-3 ml-7">https://www.wjthinkbig.com/{previewUrl}</div>
    </>
  );
};
