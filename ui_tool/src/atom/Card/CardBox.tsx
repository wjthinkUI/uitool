import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as ImagePicker } from '@assets/icon/icon_imagePicker.svg';
import { ReactComponent as LinkSetter } from '@assets/icon/icon_LinkSetter.svg';
import { ReactComponent as Trashcan } from '@assets/icon/icon_EditTrashCan.svg';
import { ReactComponent as Upload } from '@assets/icon/icon_Upload.svg';
import { ModalLinkSetting } from '@organism/Modal/ModalLinkSetting';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateSrc, deleteSrcAndLink } from '@store/slice/sliceEditPage';
interface CardBoxProps {
  isCircle: boolean;
  blockIndex: number;
  boxIndex: number;
}

export const CardBox = ({ isCircle, blockIndex, boxIndex }: CardBoxProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const loadedpageData = useSelector((state: RootState) => state.editPage);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (loadedpageData.page[blockIndex].src[boxIndex]?.imageId) {
      setSelectedImage(
        () => loadedpageData.page[blockIndex].src[boxIndex].imageSrc
      );
    }
  }, [loadedpageData]);

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
    if (loadedpageData.page[blockIndex].src.length > 1) {
      setSelectedImage(() => '');
      dispatch(deleteSrcAndLink({ index: blockIndex, boxIndex: boxIndex }));
    }
    if (fileRef.current) {
      fileRef.current.value = '';
    }
  };

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setSelectedImage(reader.result);
          dispatch(
            updateSrc({
              index: blockIndex,
              src: {
                imageSrc: reader.result,
                imageId: uuidv4(),
                srcIndex: boxIndex,
              },
            })
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };
  //   if (!isEditMode) {
  //     return <div>editmode가 false 일 경우 저장된 이미지 출력 </div>;
  //   }
  return (
    <>
      <input
        type="file"
        ref={fileRef}
        onChange={addImage}
        accept=".jpg,.png,.jpeg"
        className="hidden"
      />

      <div className="relative w-full h-full group/item">
        <Trashcan
          className="absolute z-10 rounded-md cursor-pointer -left-3 -top-3 fill-white bg-grayscale-300 w-fit h-fit"
          onClick={handleDeleteImageAndLink}
        />
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
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Preview"
            className={`object-cover w-full h-full ${
              isCircle ? 'rounded-full' : ''
            }`}
          />
        )}
      </div>
    </>
  );
};
