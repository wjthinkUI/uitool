import { ManageMenuListTree } from '@organism/Management/ManagementMenuListTree';
import { useLoaderData } from 'react-router-dom';

export const AdminManageMenuLoader = async () => {
  //db의 pageinfo 모두 가져오기
  const res = await fetch('http://localhost:5174/adminlist/menu');
  if (!res.ok) {
    throw Error('fetching error, try again...');
  }
  const resData = await res.json();
  return {resData};
};

export const AdminManageList = () => {
  
  return (
    <div className="w-[1220px] h-auto">
      <ManageMenuListTree />
    </div>
  );
};

export const AdminManageListLoader = () => {};
