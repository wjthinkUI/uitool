import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { setDesign } from '@store/slice/SliceBlockDesignSideBar';
import { useSelectBlockDesign } from '@hooks/useSelectBlockDesign';

export const ModalBlockDesignSideBar = () => {
  const [isActive, setIsActive] = useState<number>();
  const { sidebarInfo } = useSelectBlockDesign();
  const dispatch = useDispatch<AppDispatch>();

  const handleSideBar = (id: number) => {
    setIsActive(id);
    const data = sidebarInfo.find((el) => el.id === id);
    if (data) {
      console.log(data.type);
      dispatch(setDesign({ type: data.type }));
    }
  };

  return (
    <div className="w-[150px] shrink-0 h-fit">
      <ul className="pt-1 m-5 mt-0 ml-9 w-fit">
        {sidebarInfo.map((item) => (
          <li
            key={item.id}
            className={`m-3 mt-0 mb-6 cursor-pointer text-body3m ${
              isActive === item.id ? 'text-primary-950' : ''
            }`}
            onClick={() => handleSideBar(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
