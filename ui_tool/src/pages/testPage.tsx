import { useState } from 'react';
import { ModalDuplication } from '../organism/Modal/ModalDuplication';
import { ModalDetail } from '../organism/Modal/ModalDetail';
import { ModalLinkSetting } from '../organism/Modal/ModalLinkSetting';
import { ModalBlockDesign } from '../organism/Modal/ModalBlockDesign';
import { ReactComponent as Hamburger } from '../assets/icon_NavHamburger.svg';
import { ReactComponent as Search } from '../assets/icon_NavSearch.svg';
import { Table } from '../atom/Modal/tempTable';
const TestPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex flex-wrap">
      {/* <CardSquareNomal
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
      /> */}
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="flex-shrink-0 h-20 bg-primary-500 w-30"
      >
        모달열기
      </button>
      {/* {showModal && <ModalDuplication />} */}
      {/* {showModal && <ModalDetail />} */}
      {showModal && <ModalLinkSetting />}
      {/* <ModalBlockDesign /> */}
      <Hamburger />
      <Search />
      <div className="container mx-auto">
        <h1 className="mt-4 text-3xl font-semibold text-center">8x5 Table</h1>
        <Table />
      </div>
    </div>
  );
};

export default TestPage;
