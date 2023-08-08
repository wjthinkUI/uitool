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
        <CardBox isCircle={false} blockIndex={blockIndex} boxIndex={boxIndex} />
      </div>
      <div>
        {blockIndex && (
          <CardEditor
            blockIndex={blockIndex}
            boxIndex={boxIndex}
            shape="wide"
          />
        )}
      </div>
      {/* <p className="m-3 text-center text-[17px] font-bold leading-7">
        [클래스]
      </p>
      <p className="m-2 text-center text-[15px] font-light leading-5 text-grayscale-800">
        친구들과 함께 모여 교과과정에 필요한 핵심 과목을 집중적으로 관리
        받습니다. 전문 선생님의 학습 관리로 자기주도 학습을 성장시 킬 수
        있습니다.
      </p> */}
    </div>
  );
};
