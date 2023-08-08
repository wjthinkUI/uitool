import { CardSquareWide } from '@atom/Card/CardSquareWide';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { v4 as uuidv4 } from 'uuid';

export const list2 = ({ block_id }: { block_id: number }) => {
  const pageLinkData = useSelector(
    (state: RootState) => state.editPage.page[block_id].link
  );

  return (
    <div className="flex items-center justify-center h-auto pt-20 pb-20">
      {block_id !== undefined &&
        pageLinkData.map((_, idx) => (
          <CardSquareWide key={idx} blockIndex={block_id} boxIndex={idx} />
        ))}
    </div>
  );
};
