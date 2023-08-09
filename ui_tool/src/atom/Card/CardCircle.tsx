import type { CircleProps } from 'types';

import { CardBox } from './CardBox';
import { CardEditor } from './CardEditor';
interface CardProps {
  blockIndex: number;
  boxIndex: number;
}

export const CardCircle = ({ blockIndex, boxIndex }: CardProps) => {
  return (
    <>
      <div className="w-[144px] h-[174px] m-4  font-noto">
        <div className="mb-3 rounded-full w-[144px] h-[144px] bg-grayscale-200">
          {blockIndex !== undefined && (
            <CardBox isCircle blockIndex={blockIndex} boxIndex={boxIndex} />
          )}
        </div>
        <div>
          {blockIndex !== undefined && (
            <CardEditor
              blockIndex={blockIndex}
              boxIndex={boxIndex}
              shape="circle"
            />
          )}
        </div>
      </div>
    </>
  );
};
