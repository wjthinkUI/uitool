import { AdabtiveTab } from '@molecule/Edit/EditAdabtiveTab';
import {
  useParams,
  useLoaderData,
  Await,
  useFetcher,
  json,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EditPageDataType } from 'types';
import { GridContainer } from '@atom/public/GridContainer';
import { Image1 } from '@atom/Edit/Image1';
import { Image2 } from '@atom/Edit/Image2';
import { Image3 } from '@atom/Edit/Image3';
import { Image4 } from '@atom/Edit/Image4';
import { ImageCustom } from '@atom/Edit/ImageCustom';
import { setInitialState } from '@store/slice/sliceEditPage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { LoadingSpinner } from '@atom/public/LoadingSpinner';
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign';
/**
 * 1. EditPage에서는 페이지의 정보를 받아와서 페이지를 렌더링한다.
 * 2. 페이지의 정보는 store에서 받아온다.
 * 3. 페이지의 정보는 페이지의 id를 통해 받아온다.
 * 4. pageInfo는 submit할 때 date만 변경해주면 된다.
 * 5. page는 submit할 때 layout만 변경해주면 된다.
 * 6. page는 layoutTable을 통해 렌더링한다.
 * 7. layoutTable은 layout에 따라서 다르게 렌더링한다.
 *
 *
 * design type, design id 정의
 * action addBlock - 블록 추가 버튼 클릭 시, 빈 블록값 생성
 * action modal on - 새로 생성된 블록에서 디자인 수정 클릭 시, 디자인 선택 모달 띄움
 * action setDesign - 디자인 선택 모달에서 디자인 선택 시, 디자인 타입과 디자인 아이디를 블록에 저장
 * selector store - 블록에 저장된 디자인 타입과 디자인 아이디를 통해 디자인 렌더링
 *
 * 반복),,,
 *
 * 저장 버튼 클릭 시, 페이지 정보와 블록 정보를 서버에 전송 (http fetch)
 *
 */
const LAYOUT_COMPONENT = {
  image: {
    layout1: Image1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
  },
  text: {
    layout1: Image1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
  },
  video: {
    layout1: Image1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
  },
  custom: {
    layout1: Image1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
  },
};

// 사용방법 레퍼런스
// return (
//   <div className='w-[100vw] h-auto'>
//     {page.map((v: any, i: any) => {
//       const Component = LAYOUT_COMPONENT[v.type][`layout${v.layout}`];
//       return <Component key={i} />
//     }
// )

export const EditPage = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const loadedData: any = useLoaderData(); //promise, page type
  const dispatch = useDispatch<AppDispatch>();
  console.log('loadedData =', loadedData);

  useEffect(() => {
    dispatch(
      setInitialState({
        page: loadedData.pageData.page,
        pageInfo: loadedData.pageData.pageInfo,
      })
    );

    setIsLoading(() => false);
  }, [dispatch, setIsLoading]);

  const pageData = useSelector((state: RootState) => state.editPage);
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {!isLoading && (
        <div className="w-[100vw] h-auto">
          <AdabtiveTab onTabChange={handleTabChange} />
          <GridContainer
            deviceWidth={
              activeTab === 'desktop'
                ? 1220
                : activeTab === 'tablet'
                ? 785
                : activeTab === 'mobile'
                ? 375
                : 0
            }
          >
            <ModalBlockDesign blockIndex={0} />
            {pageData.page.map((v: any, i: any) => {
              const Component =
                LAYOUT_COMPONENT[v.type][`layout${v.contentLayout}`];
              return <Component key={i} />;
            })}
          </GridContainer>
        </div>
      )}
    </>
  );
};
// {pageData.page.map((v: any, i: any) => {
//   const Component =
//     LAYOUT_COMPONENT[v.type][`layout${v.contentLayout}`];
//   console.log('working');
//   return <Component key={i} />;
// })}
