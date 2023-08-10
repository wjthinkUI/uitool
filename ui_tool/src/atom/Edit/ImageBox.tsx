import { useEffect, useState } from 'react';
import { ReactComponent as IconPhoto } from '@assets/icon/icon_photo.svg';
import { ReactComponent as IconLink } from '@assets/icon/icon_link.svg';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateSrc, updateLink } from '@store/slice/sliceEditPage';
import { ModalLinkSetting } from '@organism/Modal/ModalLinkSetting';
import { commonModalToggle } from '@store/slice/sliceModalToggle';
import { Link, useNavigate } from 'react-router-dom';
interface Image1Props {
  height: string;
  boxIndex: number;
  blockIndex: number;
}

export const Image = ({ height, boxIndex, blockIndex }: Image1Props) => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState<boolean>(false);
  useEffect(() => {
    if (location.pathname.startsWith('/edit/')) {
      setEditMode(true);
    }
  }, []);

  const dispatch = useDispatch<AppDispatch>();
  const loadedpageData = useSelector((state: RootState) => state.editPage);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [inputId, setInputId] = useState<string>('');
  const [imageId, setImageId] = useState<string>('');
  const [isExternal, setIsExternal] = useState<boolean>(false);
  const commonModalState = useSelector(
    (state: RootState) => state.modalToggle.commonModalState
  );
  useEffect(() => {
    const uniqueId = uuidv4();
    setInputId(() => uniqueId);
    setImageId(() => uniqueId);
  }, []);

  useEffect(() => {
    if (loadedpageData.page[blockIndex].src[boxIndex]?.imageId) {
      const getImage = localStorage.getItem(
        loadedpageData.page[blockIndex].src[boxIndex]?.imageId
      );
      setSelectedImage(() => getImage);
      const link = loadedpageData.page[blockIndex].link[boxIndex]?.link;
      console.log('link = ', link);
      if (link?.startsWith('http://') || link?.startsWith('https://')) {
        setIsExternal(() => true);
      }
    }
  }, [loadedpageData]);
  useEffect(() => {
    console.log(isExternal);
  }, [isExternal]);

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setSelectedImage(reader.result);
          localStorage.setItem(imageId, reader.result);
          dispatch(
            updateSrc({
              index: blockIndex, //추후 인덱스 받아와야함
              src: {
                // imageSrc: reader.result,
                imageId: imageId,
                srcIndex: boxIndex,
              }, // db로 저장 시 따로빼서 key-value 값으로 로컬스토리지 저장
            })
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDefaultImage = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = event.currentTarget;
    if (!target.src.endsWith('https://placehold.co/300x300')) {
      target.src = 'https://placehold.co/300x300';
    }
    // const target = event.currentTarget;
    // if (loadedpageData.page[blockIndex].src[boxIndex]?.imageId) {
    //   target.src = loadedpageData.page[blockIndex].src[boxIndex].imageSrc;
    // } else {
    //   target.src = 'https://via.placeholder.com/400';
    // }
  };

  return (
    <div
      className={`w-[100%] h-[${height}] ${
        editMode ? 'group' : 'group-disabled'
      } mx-auto flex justify-center items-center`}
    >
      <input
        id={inputId}
        className="hidden"
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={addImage}
      />
      <div className="z-10 hidden space-x-2 group-hover:flex group-hover:absolute">
        <label
          htmlFor={inputId}
          className="hover:bg-primary-950 flex items-center justify-center w-[30px] h-[30px] bg-primary-900 rounded cursor-pointer"
        >
          <IconPhoto />
        </label>

        <span className="hover:bg-primary-950 flex items-center justify-center w-[30px] h-[30px] bg-primary-900 rounded cursor-pointer">
          <IconLink onClick={() => dispatch(commonModalToggle(boxIndex))} />
          {commonModalState === boxIndex && (
            <ModalLinkSetting boxIndex={boxIndex} blockIndex={blockIndex} />
          )}
        </span>
      </div>
      <div className="group-hover:brightness-50">
        {editMode && (
          <img
            className="object-contain"
            src={selectedImage}
            alt="placeholder"
            onError={handleDefaultImage}
          />
        )}
        {!editMode && isExternal && (
          <a
            href={loadedpageData.page[blockIndex].link[boxIndex]?.link}
            target="_blank"
          >
            <img
              className="object-contain"
              src={selectedImage}
              alt="placeholder"
              onError={handleDefaultImage}
            />
          </a>
        )}
        {!editMode && !isExternal && (
          <Link to={loadedpageData.page[blockIndex].link[boxIndex]?.link}>
            <img
              className="object-contain"
              src={selectedImage}
              alt="placeholder"
              onError={handleDefaultImage}
            />
          </Link>
        )}
      </div>
    </div>
  );
};
