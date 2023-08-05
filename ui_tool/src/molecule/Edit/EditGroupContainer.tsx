import { GroupProps } from 'types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { selectBlockIndex } from '@store/slice/sliceEditPage';
export const EditGroupContainer: React.FC<GroupProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  return <div className="relative flex flex-col group">{children}</div>;
};
