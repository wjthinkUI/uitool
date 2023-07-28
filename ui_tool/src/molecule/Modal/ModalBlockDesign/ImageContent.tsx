/**
 * description assets/emptyimage 폴더에 있는 모든 svg파일 가져와 블록디자인 모달의 요소로 추가함
 */

import { useEffect, useState } from 'react';
import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import type { BlockDesignContent } from 'types';
const modules = import.meta.glob(
  '../../../assets/emptyImage/*.svg',
  { eager: true } // 모듈을 직접가저오는 옵션
);

export const ImageContent = () => {
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
        <span key={el.id} onClick={() => tempHandler(el.id)}>
          <ModalBlockDesignMediumBox key={el.id}>
            {el.svgFile}
          </ModalBlockDesignMediumBox>
        </span>
      ))}
    </>
  );
};
