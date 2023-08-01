import { ChipGray, ChipOrange, ChipWhite } from '@atom/public/Chip';
import { CheckBox } from '@atom/public/CheckBox';
import type { ListProps } from 'types';
import { useState } from 'react';
import { ModalDetail } from '@organism/Modal/ModalDetail';
import { ModalDuplication } from '@organism/Modal/ModalDuplication';
/**상세/복제/디자인 버튼 기능 미구현 */

/**list atom : 최상위 div w-1220px 수정해야 할 듯 */
export const ListPage = ({ id, title, date, path, category }: ListProps) => {
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [showDuplModal, setShowDuplModal] = useState<boolean>(false);
  const handleClickChips = (type: string) => {
    if (type === 'detail') setShowDetailModal((prev) => !prev);
    else if (type === 'dupl') setShowDuplModal((prev) => !prev);
  };
  return (
    <div className="w-[1220px] justify-between bg-grayscale-0 border-y border-grayscale-300 px-5 py-4 relative flex flex-row content-center items-center text-center">
      <div className=" basis-1/12">
        <CheckBox />
      </div>
      <p className="basis-3/12">{title}</p>
      <p className="basis-3/12">{path}</p>
      <div className="basis-1/12">
        <ChipGray text={category} />
      </div>
      <p className="basis-3/12">{date}</p>
      <div className="flex flex-row gap-2 basis-2/12">
        <ChipWhite text="상세" onClick={() => handleClickChips('detail')} />
        {showDetailModal && (
          <ModalDetail id={id} onCancel={() => handleClickChips('detail')} />
        )}
        <ChipWhite text="복제" onClick={() => handleClickChips('dupl')} />
        {showDuplModal && (
          <ModalDuplication id={id} onCancel={() => handleClickChips('dupl')} />
        )}
        <ChipOrange text="디자인" />
      </div>
    </div>
  );
};
