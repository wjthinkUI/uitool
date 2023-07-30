import { useState } from 'react';
import { ReactComponent as ArrowIcon } from '@assets/icon/icon_arrow.svg';

export const InputPageSelector = () => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <div className="relative m-3">
      <div>
        <input
          type="url"
          name=""
          id=""
          disabled={dropdown}
          placeholder="페이지 주소"
          className="w-[576px] h-[48px] rounded-[10px] bg-grayscale-50 placeholder:text-grayscale-300 pl-3 pr-12 text-body4r"
        />
      </div>
      <div
        className="absolute inset-y-0 inline rotate-90 cursor-pointer h-fit w-fit right-3 top-1"
        onClick={() => setDropDown((prev) => !prev)}
      >
        <ArrowIcon />
      </div>
      {dropdown && <DropDownMenuList />}
    </div>
  );
};

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
const DropDownMenuList = () => {
  const [value, setValue] = useState<string>('');
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
            onClick={() => setValue(() => el.path)}
          >
            {el.title}
          </li>
        ))}
      </ul>
      <div className="m-1 ml-4 text-body4m text-grayscale-300">
        사용자 추가 페이지
      </div>
      <ul>
        {DUMMY_DROP_USER.map((el) => (
          <li
            key={el.id}
            className="m-2 ml-6 cursor-pointer text-body4m hover:text-primary-950"
            onClick={() => setValue(() => el.path)}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
