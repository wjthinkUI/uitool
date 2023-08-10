import { EditAddSelectDesign } from '@molecule/Edit/EditAddSelectDesign';
import { AppDispatch } from '@store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateBlockForNestedLayout } from '@store/slice/sliceEditPage';
export const Layout1 = ({ block_id }: { block_id: number }) => {
  return (
    <div className="flex flex-row w-full h-full gap-5 p-10">
      <div className="w-1/2 p-2 border-2">
        <EditAddSelectDesign block_id={block_id} />
      </div>
      <div className="w-1/2 p-2 border-2">
        <EditAddSelectDesign block_id={block_id} />
      </div>
    </div>
  );
};
