import { ManagePageTable } from '@organism/Management/ManagementPageTable';
import { redirect, json } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';

export const AdminManagePage = () => {
  return (
    <div className="w-[1220px] h-auto">
      <ManagePageTable />
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
  return null;
};

export const AdminMangePageAction = async ({ request, params }: any) => {
  //추후 커스텀훅으로 대체 예정
  const dispatch = useDispatch<AppDispatch>();
  //모달에서 확인 버튼 클릭시 데이터 넘어옴
  const data = await request.json();
  // console.log(data);
  if (request.method === 'PUT') {
    //db에 데이터 변경 요청
    const res = await fetch('http://localhost:8080/adminlist/page', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, id: 1 }),
    });
    if (!res.ok) {
      throw Error('fetching error, try again...');
    }
    //변경된 값 가져와서 다시 디스패치
    const updatedData = await res.json();
    console.log(updatedData.data);
    // dispatch
  } else if (request.method === 'POST') {
    //db에 데이터 복제 요청
    const res = await fetch('http://localhost:8080/adminlist/page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, id: 1 }), //찾는 데이터 아이디로 추후 교체
    });
    if (!res.ok) {
      throw Error('fetching error, try again...');
    }
    //변경된 값 가져와서 다시 디스패치
    const updatedData = await res.json();
    console.log(updatedData.data);
    // dispatch
  }
  return redirect('/test');
};
