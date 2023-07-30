import { AdminManageTab } from '@molecule/List/AdminManageTab';
import { WjHeader } from '@molecule/public/Header';
import { Outlet } from 'react-router-dom';

export const AdminManage = () => {

  return (
    <div className="w-[1220px] h-auto">
      <WjHeader />
      {/* Tab state로 하위 organ 컴포넌트 전환 */}
      <AdminManageTab
        LeftText={'메뉴 관리'}
        RightText={'페이지 관리'}
        LeftTo={'/adminlist/menu'}
        RightTo={'/adminlist/page'}
      />
      <Outlet />
    </div>
  );
};
