import type { CircleProps } from 'types';

import { CardBox } from './CardBox';
interface CardProps {
  blockIndex: number;
  boxIndex: number;
}
export const CardCircle = ({ blockIndex, boxIndex }: CardProps) => {
  return (
    <>
      {blockIndex !== undefined && (
        <div className="w-[144px] h-[174px] m-2  font-noto">
          <div className="mb-3 rounded-full w-[144px] h-[144px] bg-grayscale-200">
            <CardBox isCircle blockIndex={blockIndex} boxIndex={boxIndex} />
          </div>
          <p className="text-center text-[15px] font-light leading-5 text-grayscale-800 cursor-pointer">
            초단기한글
          </p>
        </div>
      )}
    </>
  );
};
