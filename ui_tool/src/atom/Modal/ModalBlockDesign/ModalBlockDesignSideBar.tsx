import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { setDesign } from '@store/slice/SliceBlockDesignSideBar';
const DUMMY_sideBarList = [
  {
    id: 1,
    type: 'image',
    listItem: '이미지',
  },
  {
    id: 2,
    type: 'line',
    listItem: '구분선',
  },
  {
    id: 3,
    type: 'list',
    listItem: '목록',
  },
  {
    id: 4,
    type: 'text',
    listItem: '텍스트',
  },
  {
    id: 5,
    type: 'table',
    listItem: '표',
  },
  {
    id: 6,
    type: 'layout',
    listItem: '레이아웃',
  },
];

export const ModalBlockDesignSideBar = () => {
  const [isActive, setIsActive] = useState<number>();
  const listRef = useRef(null);

  const dispatch = useDispatch<AppDispatch>();
  const handleSideBar = (id: number) => {
    setIsActive(id);
    const data = DUMMY_sideBarList.find((el) => el.id === id);
    if (data) {
      console.log(data?.type);
      dispatch(setDesign({ type: data?.type }));
    }
  };

  return (
    <div className="w-[150px] shrink-0 h-fit">
      <ul className="pt-1 m-5 mt-0 ml-9 w-fit">
        {DUMMY_sideBarList.map((item) => (
          <li
            key={item.id}
            ref={listRef}
            className={`m-3 mt-0 mb-6 cursor-pointer text-body3m ${
              isActive === item.id ? 'text-primary-950' : ''
            }`}
            onClick={() => handleSideBar(item.id)}
          >
            {item.listItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
