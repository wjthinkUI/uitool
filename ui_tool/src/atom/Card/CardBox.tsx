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
import { commonModalToggle } from '@store/slice/sliceModalToggle';
import { Link } from 'react-router-dom';
interface CardBoxProps {
  isCircle: boolean;
  blockIndex: number;
  boxIndex: number;
}

export const CardBox = ({ isCircle, blockIndex, boxIndex }: CardBoxProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isExternal, setIsExternal] = useState<boolean>(false);
  useEffect(() => {
    if (location.pathname.startsWith('/edit/')) {
      setEditMode(true);
    }
  }, []);

  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const loadedpageData = useSelector((state: RootState) => state.editPage);
  const commonModalState = useSelector(
    (state: RootState) => state.modalToggle.commonModalState
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (loadedpageData.page[blockIndex].src[boxIndex]?.imageId) {
      //로컬스토리지 사용 , 추후 리팩토링해야함
      const getImage = localStorage.getItem(
        loadedpageData.page[blockIndex].src[boxIndex]?.imageId
      );
      setSelectedImage(() => getImage);
    }
    const link = loadedpageData.page[blockIndex].link[boxIndex]?.link;
    if (link?.startsWith('http://') || link?.startsWith('https://')) {
      setIsExternal(() => true);
    }
  }, [loadedpageData]);

  const handlePickImage = () => {
    //input 파일선택창 열기
    if (fileRef && fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleLinkSettingModal = () => {
    dispatch(commonModalToggle(blockIndex));
  };
  const handleDeleteImageAndLink = () => {
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
          const imageId = uuidv4();
          localStorage.setItem(imageId, reader.result);
          dispatch(
            updateSrc({
              index: blockIndex,
              src: {
                // imageSrc: reader.result,
                imageId: imageId,
                srcIndex: boxIndex,
              },
            })
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
        {editMode && (
          <>
            <Trashcan
              className="absolute z-10 rounded-md cursor-pointer -left-3 -top-3 fill-white bg-grayscale-300 w-fit h-fit"
              onClick={handleDeleteImageAndLink}
            />
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
              {commonModalState === blockIndex && (
                <ModalLinkSetting boxIndex={boxIndex} blockIndex={blockIndex} />
              )}
            </div>
          </>
        )}
        {editMode && (
          <img
            className={`object-cover w-full h-full ${
              isCircle ? 'rounded-full' : ''
            }`}
            src={selectedImage}
          />
        )}
        {!editMode && isExternal && (
          <a
            href={loadedpageData.page[blockIndex].link[boxIndex]?.link}
            target="_blank"
          >
            <img
              className={`object-cover w-full h-full ${
                isCircle ? 'rounded-full' : ''
              }`}
              src={selectedImage}
            />
          </a>
        )}
        {!editMode && !isExternal && (
          <Link to={loadedpageData.page[blockIndex].link[boxIndex]?.link}>
            <img
              src={selectedImage}
              className={`object-cover w-full h-full ${
                isCircle ? 'rounded-full' : ''
              }`}
            />
          </Link>
        )}
      </div>
    </>
  );
};
