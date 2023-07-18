import { useState } from 'react';
import CardCircle from '../atom/cardCircle';
import CardSquareNomal from '../atom/cardSquareNormal';
import CardSquareWide from '../atom/cardSquareWide';
import CardSquareBig from '../atom/cardSquareBig';
import LinkSettingModal from '../atom/linkSettingModal';

const TESTelement = () => {
  return (
    <div className="m-8">
      <div>test</div>
      <div>test2</div>
    </div>
  );
};

const TestPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex">
      <CardSquareNomal
        title="1:1방문"
        period="주 1회 / 과목당 10분"
        description="학습관리 및 상담"
      />
      <CardSquareWide
        title="티칭 및 학습"
        description="북패드 디지털 콘텐츠를 활용하여
학생들의 지면 학습을 더욱 심도 깊고
쉽게 이해하여 기본 개념을 탄탄하게 합니다."
      />
      <CardCircle description="초단기한글" />
      <CardSquareBig
        title="[클래스]"
        description="친구들과 함께 모여 교과과정에 필요한 핵심 과목을
집중적으로 관리 받습니다.
전문 선생님의 학습 관리로 자기주도 학습을 성장시
킬 수 있습니다."
      />
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="flex-shrink-0 h-20 bg-primary-500 w-30"
      >
        모달열기
      </button>
      {showModal && (
        <LinkSettingModal
          height="min"
          title="페이지 복제"
          onCancel={() => {
            setShowModal(false);
          }}
        >
          <TESTelement />
        </LinkSettingModal>
      )}
    </div>
  );
};

export default TestPage;
