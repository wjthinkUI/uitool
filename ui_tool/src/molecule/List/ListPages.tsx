import { ChipGray, ChipOrange, ChipWhite } from '@atom/public/Chip';
import { CheckBox } from '@atom/public/CheckBox';
import type { ListProps } from 'types';
/**상세/복제/디자인 버튼 기능 미구현 */

/**list atom : 최상위 div w-1220px 수정해야 할 듯 */
export const ListPage = ({ name, date, query, menu }: ListProps) => {
  return (
    <div className="w-[1150px] justify-between bg-grayscale-0 border-y border-grayscale-300 px-5 py-4 relative flex flex-row content-center items-center text-center">
      <div className=" basis-1/12">
        <CheckBox />
      </div>
      <p className="basis-3/12">{name}</p>
      <p className="basis-3/12">{query}</p>
      <div className="basis-1/12">
        <ChipGray text={menu} />
      </div>
      <p className="basis-3/12">{date}</p>
      <div className="flex flex-row gap-2 basis-2/12">
        <ChipWhite text="상세" />
        <ChipWhite text="복제" />
        <ChipOrange text="디자인" />
      </div>
    </div>
  );
};
