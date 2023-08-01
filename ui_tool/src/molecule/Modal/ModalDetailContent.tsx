import { InputPageInfo } from '@atom/Input/InputPageInfo';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
import { useState, useEffect } from 'react';
export const ModalDetailContent = () => {
  const data = useSelector((state: RootState) => state.modal);
  const [defaultData, setDefaultData] = useState({ id: 0, title: '', url: '' });
  const [previewUrl, setPreviewUrl] = useState<string>('');
  useEffect(() => {
    setDefaultData(() => data);
    setPreviewUrl(() => data.url.slice(1));
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-center">
        <InputPageInfo
          type="title"
          inputWidth="short"
          placeholder="페이지명"
          defaultValue={defaultData.title}
        />
        <InputPageInfo
          type="url"
          inputWidth="short"
          placeholder="pageURL"
          defaultValue={defaultData.url}
        />
      </div>
      <div className="m-3 ml-7">https://www.wjthinkbig.com/{previewUrl}</div>
    </>
  );
};
