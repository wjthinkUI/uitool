import { SquareWideProps } from 'types';
import { CardBox } from './CardBox';
import { CardEditor } from './CardEditor';
interface CardProps {
  blockIndex: number;
  boxIndex: number;
}
export const CardSquareWide = ({ blockIndex, boxIndex }: CardProps) => {
  return (
    <div className="cursor-pointer w-[273.59px] h-[277.39px] flex flex-col flex-shrink-0 items-center m-2 font-noto">
      <div className="w-[157px] h-[157px] bg-grayscale-200 mb-5">
        {blockIndex !== undefined && (
          <CardBox
            isCircle={false}
            blockIndex={blockIndex}
            boxIndex={boxIndex}
          />
        )}
      </div>
      <div>
        {blockIndex !== undefined && (
          <CardEditor
            blockIndex={blockIndex}
            boxIndex={boxIndex}
            shape="wide"
          />
        )}
      </div>
    </div>
  );
};
