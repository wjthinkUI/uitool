import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import type { BlockDesignContent } from 'types';

export const ImageContent = ({ list }: { list: BlockDesignContent[] }) => {
  const tempHandler = (id: number) => {
    console.log('clicked id = ', id);
  };

  return (
    <>
      {list.length === 0 && <div>Loading...</div>}
      {list.length !== 0 &&
        list.map((el: any) => (
          <span key={el.id} onClick={() => tempHandler(el.id)}>
            <ModalBlockDesignMediumBox key={el.id}>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignMediumBox>
          </span>
        ))}
    </>
  );
};
