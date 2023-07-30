import { WjHeader } from '@molecule/public/Header';
import { Outlet } from 'react-router-dom';
export const AdminManageRoot = () => {
  return (
    <div className="w-[1220px] h-auto">
      <WjHeader />
      <Outlet />
    </div>
  );
};
