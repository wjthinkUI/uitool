import { CardCircle } from '@atom/Card/CardCircle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { v4 as uuidv4 } from 'uuid';

export const list1 = ({ block_id }: { block_id: number }) => {
  const pageLinkData = useSelector(
    (state: RootState) => state.editPage.page[block_id].link
  );
  return (
    <div className="flex items-center justify-center h-auto pt-20 pb-20">
      {block_id !== undefined &&
        pageLinkData.map((_, idx) => {
          return <CardCircle key={idx} blockIndex={block_id} boxIndex={idx} />;
        })}
    </div>
  );
};
