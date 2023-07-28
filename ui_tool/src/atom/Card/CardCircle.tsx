import type { CircleProps } from 'types';
import { useState } from 'react';
export const CardCircle = ({ description }: CircleProps) => {
  const [desc, setDesc] = useState(description);
  const [editMode, setEditMode] = useState(false);

  const handleDesc = (text: string) => {
    setDesc(() => text);
  };

  return (
    <>
      {/* {editMode && <TESTeditor desc={description} callback={handleDesc} />} */}
      <div className="w-[144px] h-[174px] m-2  font-noto">
        <div className="mb-3 rounded-full w-[144px] h-[144px] bg-grayscale-200 cursor-pointer"></div>
        <p
          className="text-center text-[15px] font-light leading-5 text-grayscale-800 cursor-pointer"
          onClick={() => setEditMode((prev) => !prev)}
        >
          {/* <TESTeditor /> */}
          {desc}
        </p>
      </div>
    </>
  );
};
