import { useEffect, useState } from 'react';
import { ReactComponent as IconPhoto } from '@assets/icon/icon_photo.svg';
import { ReactComponent as IconLink } from '@assets/icon/icon_link.svg';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { updateSrc, updateLink } from '@store/slice/sliceEditPage';
import { ModalLinkSetting } from '@organism/Modal/ModalLinkSetting';
import { LoadingSpinner } from '@atom/public/LoadingSpinner';
interface Image1Props {
  height: string;
  boxIndex: number;
  blockIndex: number;
}

export const Image = ({ height, boxIndex, blockIndex }: Image1Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const loadedpageData = useSelector((state: RootState) => state.editPage);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [inputId, setInputId] = useState<string>('');
  const [imageId, setImageId] = useState<string>('');
  const [showModalLink, setShowModalLink] = useState<boolean>(false);

  useEffect(() => {
    const uniqueId = uuidv4();
    setInputId(() => uniqueId);
    const imageId = uuidv4();
    setImageId(() => imageId);
  }, []);

  useEffect(() => {
    if (loadedpageData.page[blockIndex].src[boxIndex]?.imageId) {
      setSelectedImage(
        () => loadedpageData.page[blockIndex].src[boxIndex].imageSrc
      );
    }
  }, [loadedpageData]);
  // if (!boxIndex) return <LoadingSpinner />;
  // console.log(boxIndex, blockIndex);

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setSelectedImage(reader.result);
          console.log(boxIndex);
          dispatch(
            updateSrc({
              index: blockIndex, //추후 인덱스 받아와야함
              src: {
                imageSrc: reader.result,
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
    if (!target.src.endsWith('https://via.placeholder.com/400')) {
      target.src = 'https://via.placeholder.com/400';
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
      className={`w-[100%] h-[${height}] group mx-auto flex justify-center items-center`}
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
          <IconLink onClick={() => setShowModalLink((prev) => !prev)} />
          {showModalLink && (
            <ModalLinkSetting
              onCancel={() => setShowModalLink((prev) => !prev)}
              boxIndex={boxIndex}
              blockIndex={blockIndex}
            />
          )}
        </span>
      </div>
      <div className="group-hover:brightness-50">
        <img
          className="object-contain"
          src={selectedImage}
          alt="placeholder"
          onError={handleDefaultImage}
        />
      </div>
    </div>
  );
};
