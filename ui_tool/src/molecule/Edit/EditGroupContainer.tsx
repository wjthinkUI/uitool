import { GroupProps } from 'types';

export const EditGroupContainer: React.FC<GroupProps> = ({ children }) => {
  return <div className="relative flex flex-col group">{children}</div>;
};
