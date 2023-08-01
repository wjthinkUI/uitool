import { useState, useEffect } from 'react';
import { ModalBlockDesignSmallBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignSmallBox';
import type { BlockDesignContent } from 'types';
// const modules = import.meta.glob(
//   '../../../assets/line/*.svg',
//   { eager: true } // 모듈을 직접가저오는 옵션
// );

export const LineContent = ({ list }: any) => {
  // const [svgData, setSvgData] = useState<BlockDesignContent[]>([]);
  // useEffect(() => {
  //   const modulesArr = Object.values(modules);

  //   const data = modulesArr.map((el: any, idx: number) => ({
  //     id: idx,
  //     svgFile: el.ReactComponent(),
  //   }));
  //   if (data) {
  //     setSvgData(data);
  //   }
  // }, []);

  const tempHandler = (id: number) => {
    console.log('clicked id = ', id);
  };

  return (
    <>
      {list.map((el: any) => (
        <span key={el.id} onClick={() => tempHandler(el.id)}>
          <ModalBlockDesignSmallBox>
            {el.svgEl.ReactComponent()}
          </ModalBlockDesignSmallBox>
        </span>
      ))}
    </>
  );
};
