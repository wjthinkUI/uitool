import { InputPageInfo } from '@atom/Input/InputPageInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useState, useEffect } from 'react';
export const ModalDuplicationContent = () => {
  const Data = useSelector((state: RootState) => state.modal.url);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  useEffect(() => {
    setPreviewUrl(() => Data.slice(1));
  }, [Data]);

  return (
    <>
      <div className="flex flex-col items-center">
        <InputPageInfo
          type="duplTitle"
          inputWidth="short"
          placeholder="페이지명"
        />
        <InputPageInfo
          type="duplUrl"
          inputWidth="short"
          placeholder="페이지 주소"
        />
      </div>
      <div className="m-3 mb-5 ml-5">{`http://www.wjthinkbig.com/${previewUrl}`}</div>
    </>
  );
};
