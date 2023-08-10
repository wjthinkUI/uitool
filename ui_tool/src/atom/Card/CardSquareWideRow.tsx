import { CardBox } from './CardBox';
import { CardEditor } from './CardEditor';
interface CardProps {
  blockIndex: number;
  boxIndex: number;
}
export const CardSquareWideRow = ({ blockIndex, boxIndex }: CardProps) => {
  return (
    <div className="cursor-pointer w-[500px] h-fit flex flex-shrink-0 items-center m-2 font-noto">
      <div className="w-[250px] h-[150px] bg-grayscale-200 mb-5">
        {blockIndex !== undefined && (
          <CardBox
            isCircle={false}
            blockIndex={blockIndex}
            boxIndex={boxIndex}
          />
        )}
      </div>
      <div className="h-full m-0 mb-auto">
        {blockIndex !== undefined && (
          <CardEditor
            blockIndex={blockIndex}
            boxIndex={boxIndex}
            shape="default"
          />
        )}
      </div>
    </div>
  );
};
