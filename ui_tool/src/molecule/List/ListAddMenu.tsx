import { ButtonOutline } from '@atom/Button/ButtonOutline';
import { ModalAddMenu } from '@organism/Modal/ModalAddMenu';
import { useState } from 'react';

export const ListAddMenu = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between pt-24 pb-11">
      <div className="flex flex-col">
        <h3 className=" text-h3">메뉴 설정</h3>
        <p className=" text-body3r">메뉴 항목과 구조를 설정해주세요.</p>
      </div>
      <ButtonOutline
        onClick={() => setShowModal(!showModal)}
        text={'메뉴 항목 추가'}
      />
    {showModal && <ModalAddMenu onCancel={() => setShowModal(false)} />}
    </div>
  );
};

/**
 * 메뉴 항목 추가 버튼을 누르면 모달이 뜬다.
 * 모달에서는 메뉴 항목을 추가할 수 있다.
 * 모달에서는 메뉴 제목과 페이지 주소를 선택할 수 있다.
 * 메뉴 제목과 페이지 주소를 입력하고 확인을 누르면
 * 데이터 베이스에 메뉴 항목이 보내지고, 메뉴 관리 리스트에도 업데이트된다.
 */