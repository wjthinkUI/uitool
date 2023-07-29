import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as ImagePicker } from '@assets/icon/icon_imagePicker.svg';
import { ReactComponent as LinkSetter } from '@assets/icon/icon_LinkSetter.svg';
import { ReactComponent as Trashcan } from '@assets/icon/icon_EditTrashCan.svg';
import { ReactComponent as Upload } from '@assets/icon/icon_Upload.svg';
import { ModalLinkSetting } from '@organism/Modal/ModalLinkSetting';

export const useImageAndLinkSetting = (isCircle: boolean) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(true); // 나중에 리덕스로 대체
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    if (!imageFile) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        setPreviewUrl(fileReader.result);
      }
    };
    fileReader.readAsDataURL(imageFile);
    //미완성 리덕스 상태관리 -> 이미지 id는 디스패치 , 링크는 모달에서 디스패치 / 이미지 파일은 로컬스토리지 저장
  }, [imageFile]);

  const handlePickImage = () => {
    //input 파일선택창 열기
    if (fileRef && fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleLinkSettingModal = () => {
    //링크셋팅 모달창 열기
    setShowModal((prev) => !prev);
  };
  const handleDeleteImageAndLink = () => {
    //미완성 리덕스 상태관리 -> 이미지 id삭제, 이미지 링크 삭제 / 로컬스토리지 이미지 삭제
    setPreviewUrl('');
    setImageFile(null);
    if (fileRef.current) {
      fileRef.current.value = '';
    }
  };

  const handlePickedImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let pickedFile;
    let isValid = false;
    if (event.target.files && event.target.files.length === 1) {
      isValid = true;
      pickedFile = event.target.files[0];
      setImageFile(pickedFile);
    }

    if (!isValid) {
      return new Error('file upload error...');
    }
  };

  //   if (!isEditMode) {
  //     return <div>editmode가 false 일 경우 저장된 이미지 출력 </div>;
  //   }
  const ImageAndLinkSelector = (
    <>
      <input
        type="file"
        ref={fileRef}
        onChange={handlePickedImageChange}
        accept=".jpg,.png,.jpeg"
        className="hidden"
      />

      <div className="relative w-full h-full group/item">
        <Trashcan
          className="absolute z-10 rounded-md cursor-pointer -left-3 -top-3 fill-white bg-grayscale-300 w-fit h-fit"
          onClick={handleDeleteImageAndLink}
        />
        {!previewUrl && (
          <>
            <div className="absolute set__center">
              <Upload className="group-hover/item:invisible" />
            </div>
            <div className="absolute z-10 inline-flex set__center">
              <ImagePicker
                className="hidden m-1 cursor-pointer group-hover/item:inline"
                onClick={handlePickImage}
              />
              <LinkSetter
                className="hidden m-1 cursor-pointer group-hover/item:inline"
                onClick={handleLinkSettingModal}
              />
              {showModal && (
                <ModalLinkSetting onCancel={handleLinkSettingModal} />
              )}
            </div>
          </>
        )}
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            className={`object-cover w-full h-full ${
              isCircle ? 'rounded-full' : ''
            }`}
          />
        )}
      </div>
    </>
  );

  return { ImageAndLinkSelector };
};
