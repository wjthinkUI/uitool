import { CardCircle } from '@atom/Card/CardCircle';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { v4 as uuidv4 } from 'uuid';

export const list1 = ({ block_id }: { block_id: number }) => {
  const pageData = useSelector((state: RootState) => state.editPage.page);
  console.log('block_id = ', block_id);
  return (
    <div className="flex items-center justify-center h-72">
      {block_id !== undefined &&
        pageData[block_id]?.src?.map((_, idx) => (
          <CardCircle key={uuidv4()} blockIndex={block_id} boxIndex={idx} />
        ))}
    </div>
  );
};
