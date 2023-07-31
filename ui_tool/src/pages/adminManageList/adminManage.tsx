import { AdminManageTab } from '@molecule/List/AdminManageTab';
import { WjHeader } from '@molecule/public/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export const AdminManage = () => {
  const navigate = useNavigate();
  const currentPath = useLocation();
  const pagesInfo = useLoaderData(); //loader 가 리턴한값 가져오기
  console.log('PAGESINFO=', pagesInfo);
  useEffect(() => {
    currentPath.pathname === '/adminlist/page'
      ? navigate('/adminlist/page')
      : navigate('/adminlist/menu');
  }, []);

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

export const AdminManageLoader = async () => {
  //db의 pageinfo 모두 가져오기
  const res = await fetch('http://localhost:8080/adminlist/page');
  if (!res.ok) {
    throw Error('fetching error, try again...');
  }

  const resData = await res.json();
  console.log(resData);
  return resData;
};
