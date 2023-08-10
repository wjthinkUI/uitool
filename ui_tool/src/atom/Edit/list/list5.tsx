import { CardSquareWideRow } from '@atom/Card/CardSquareWideRow';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

export const list5 = ({ block_id }: { block_id: number }) => {
  const pageLinkData = useSelector(
    (state: RootState) => state.editPage.page[block_id].link
  );

  return (
    <div className="flex items-center justify-center h-auto pt-20 pb-20">
      {block_id !== undefined &&
        pageLinkData.map((_, idx) => (
          <CardSquareWideRow key={idx} blockIndex={block_id} boxIndex={idx} />
        ))}
    </div>
  );
};
