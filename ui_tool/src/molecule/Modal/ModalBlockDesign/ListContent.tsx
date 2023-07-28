import type { BlockDesignContent } from 'types';
import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import { useState, useEffect } from 'react';
const modules = import.meta.glob(
  '../../../assets/list/*.svg',
  { eager: true } // 모듈을 직접가저오는 옵션
);

export const ListContent = () => {
  const [svgData, setSvgData] = useState<BlockDesignContent[]>([]);
  useEffect(() => {
    const modulesArr = Object.values(modules);

    const data = modulesArr.map((el: any, idx: number) => ({
      id: idx,
      svgFile: el.ReactComponent(),
    }));
    if (data) {
      setSvgData(data);
    }
  }, []);

  const tempHandler = (id: number) => {
    console.log('clicked id = ', id);
  };

  return (
    <>
      {svgData.map((el) => (
        <span
          key={el.id}
          onClick={() => tempHandler(el.id)}
          className="w-fit h-fit"
        >
          <ModalBlockDesignMediumBox>{el.svgFile}</ModalBlockDesignMediumBox>
        </span>
      ))}
    </>
  );
};
