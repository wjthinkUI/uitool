import { Image } from './ImageBox';
import { useState } from 'react';

export const ImageCustom = () => {
  const [imageCount, setImageCount] = useState<number[]>([0]);
  const addImage = () => {
    setImageCount([...imageCount, imageCount.length]);
  };
  const removeImage = () => {
    setImageCount(imageCount.slice(0, imageCount.length - 1));
  };

  return (
    <div className="group">
      <div className="w-[100%] h-auto mx-auto flex justify-center items-center gap-5 overflow-hidden">
        {imageCount.map((_, index) => {
          return <Image key={index} height="300px" />;
        })}
      </div>
      <button
        className="hidden group-hover:block relative float-right bottom-10 z-11 w-[50px] h-[30px] rounded bg-grayscale-100 mx-5"
        onClick={removeImage}
      >
        삭제
      </button>
      <button
        className="hidden group-hover:block relative float-right bottom-10 z-11 w-[50px] h-[30px] rounded bg-grayscale-100"
        onClick={addImage}
      >
        추가
      </button>
    </div>
  );
};
