import { ModalBlockDesignMediumBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignMediumBox';
import type { BlockDesignContent } from 'types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { updateTypeAndContentLayout } from '@store/slice/sliceEditPage';
export const ImageContent = ({
  list,
  type,
}: {
  list: BlockDesignContent[];
  type: BlockDesignContent;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDispatch = (contentLayout: number, type: string) => {
    dispatch(updateTypeAndContentLayout({ index: 0, type, contentLayout }));
  };

  return (
    <>
      {list.length === 0 && <div>Loading...</div>}
      {list.length !== 0 &&
        list.map((el: any) => (
          <span
            key={el.id}
            onClick={() => handleDispatch(el.contentLayout, type)}
          >
            <ModalBlockDesignMediumBox key={el.id}>
              {el.svgEl.ReactComponent()}
            </ModalBlockDesignMediumBox>
          </span>
        ))}
    </>
  );
};
