import { setTitle, setId } from '@store/slice/sliceModal';
import { AppDispatch, RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const DUMMY_DROP_USER = [
  {
    id: 1,
    title: '내게 맞는 북클럽 찾기',
    path: '/1',
  },
  {
    id: 2,
    title: '웅진북클럽 전집',
    path: '/2',
  },
  {
    id: 3,
    title: '웅진북클럽 전집',
    path: '/2',
  },
  {
    id: 4,
    title: '웅진북클럽 전집',
    path: '/2',
  },
];

const DUMMY_DROP_PUBLIC = [
  {
    id: 1,
    title: '메인화면',
    path: '/1',
  },
  {
    id: 2,
    title: '로그인',
    path: '/2',
  },
  {
    id: 3,
    title: '회원가입',
    path: '/3',
  },
  {
    id: 4,
    title: '아이디 찾기',
    path: '/4',
  },
];
export const DropDownMenuList = ({ onCancel }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const pagesinfo = useSelector((state: RootState) => state.pagesinfo);
  console.log(pagesinfo);
  const handleDropDownList = (el: any) => {
    dispatch(setTitle(el.title));
    dispatch(setId(el.id));

    onCancel();
  };
  return (
    <div
      className="custom__scrollbar absolute z-30 overflow-y-auto w-[520px] h-[262px] rounded-[10px] border-[0.8px] border-grayscale-300 bg-grayscale-50
      "
    >
      <div className="m-4 text-body4m text-grayscale-800">
        링크할 페이지를 선택하세요
      </div>
      <div className="m-3 ml-4 text-body4m text-grayscale-300">공통 페이지</div>
      <ul>
        {DUMMY_DROP_PUBLIC.map((el) => (
          <li
            key={el.id}
            className="m-2 ml-6 cursor-pointer text-body4m hover:text-primary-950"
            onClick={() => handleDropDownList(el)}
          >
            {el.title}
          </li>
        ))}
      </ul>
      <div className="m-1 ml-4 text-body4m text-grayscale-300">
        사용자 추가 페이지
      </div>
      <ul>
        {pagesinfo.map((el) => (
          <li
            key={el.id}
            className="m-2 ml-6 cursor-pointer text-body4m hover:text-primary-950"
            onClick={() => handleDropDownList(el)}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
