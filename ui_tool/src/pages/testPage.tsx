import React, { useState } from 'react';
import { ModalDuplication } from '@organism/Modal/ModalDuplication';
import { ModalDetail } from '@organism/Modal/ModalDetail';
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign';
import { ModalLinkSetting } from '@organism/Modal/ModalLinkSetting';
import { InputPageInfo } from '@atom/Input/InputPageInfo';
import { NavBottom } from '@molecule/Nav/NavBottom';
// import { InputPageSelect } from '@atom/Input/InputPageSelector';
import { useComponentMap } from '@hooks/useComponentMap';
import { TESTeditor } from './TESTeditor';
import { useImageAndLinkSetting } from '@hooks/useImageAndLinkSetting';
import { ReactComponent as ImagePicker } from '@assets/icon/icon_imagePicker.svg';
import { ReactComponent as LinkSetter } from '@assets/icon/icon_LinkSetter.svg';
import { CardSquareBig } from '@atom/Card/CardSquareBig';
const TestPage = () => {
  // const { ImageAndLinkWrapper } = useImageAndLinkSetting();
  const [showModal, setShowModal] = useState<boolean>(false);
  // const map = {
  //   pagetitle: <InputPageInfo type="short" placeholder="페이지명" />,
  // };
  // const data = React.cloneElement(map['pagetitle']);
  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  const { el } = useComponentMap('CardCircle');
  // const editor = TESTeditor();
  return (
    <div className="flex flex-wrap">
      {/* <NavBottom />
       <InputPageSelect />
       {data}
       <InputPageInfo type="long" placeholder="페이지명" /> */}
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="flex-shrink-0 h-20 bg-primary-500 w-30"
      >
        모달열기
      </button>
      {/* {showModal && <ModalDuplication />} */}
      {/* {showModal && <ModalDetail onCancel={closeModal} id={123} />} */}
      {showModal && <ModalLinkSetting onCancel={closeModal} />}
      {/* <ModalBlockDesign /> */}
      <div className="m-10">{el}</div>
      <div className="m-10">
        <CardSquareBig title="테스트" description="테스트중입니다" />
      </div>
      {/* {ImageAndLinkWrapper} */}
    </div>
  );
};

export default TestPage;

{
  /* <CardSquareNomal
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
      /> */
}
