import { AdabtiveTab } from '@molecule/Edit/EditAdabtiveTab';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EditPageDataType } from 'types';
import { GridContainer } from '@atom/public/GridContainer';
import { Image1 } from '@atom/Edit/Image1';
import { Image2 } from '@atom/Edit/Image2';
import { Image3 } from '@atom/Edit/Image3';
import { Image4 } from '@atom/Edit/Image4';
import { Line1 } from '@atom/Edit/line/line1';
import { Line2 } from '@atom/Edit/line/line2';
import { Line3 } from '@atom/Edit/line/line3';
import { Line4 } from '@atom/Edit/line/line4';
import { Line5 } from '@atom/Edit/line/line5';
import { Line6 } from '@atom/Edit/line/line6';
import { Line7 } from '@atom/Edit/line/line7';
import { Line8 } from '@atom/Edit/line/line8';
import { Line9 } from '@atom/Edit/line/line9';
import { Line10 } from '@atom/Edit/line/line10';
import { Text1 } from '@atom/Edit/text/Text1';
import { Text2 } from '@atom/Edit/text/Text2';
import { Text3 } from '@atom/Edit/text/Text3';
import { Text4 } from '@atom/Edit/text/Text4';
import { Text5 } from '@atom/Edit/text/Text5';
import { Text6 } from '@atom/Edit/text/Text6';
import { list1 } from '@atom/Edit/list/list1';
import { list2 } from '@atom/Edit/list/list2';
import { list3 } from '@atom/Edit/list/list3';
import { list4 } from '@atom/Edit/list/list4';
import { Table } from '@atom/Edit/Table';
import { Layout1 } from '@atom/Edit/layout/Layout1';
import {
  setInitialState,
  putNewBlockBottom,
  putNewBlockTop,
} from '@store/slice/sliceEditPage';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/store';
import { EditBlock } from '@organism/Edit/EditBlock';
import { EditAddSelectDesign } from '@molecule/Edit/EditAddSelectDesign';
import { PageNavigation } from '@organism/Nav/Navigation';
import { Footer } from '@organism/Nav/Footer';
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
export const LAYOUT_COMPONENT: any = {
  initial: {
    layout0: EditAddSelectDesign,
  },
  image: {
    layout1: Image1,
    layout2: Image2,
    layout3: Image3,
    layout4: Image4,
  },
  line: {
    layout1: Line1,
    layout2: Line2,
    layout3: Line3,
    layout4: Line4,
    layout5: Line5,
    layout6: Line6,
    layout7: Line7,
    layout8: Line8,
    layout9: Line9,
    layout10: Line10,
  },
  text: {
    layout1: Text1,
    layout2: Text2,
    layout3: Text3,
    layout4: Text4,
    layout5: Text5,
    layout6: Text6,
  },
  list: {
    layout1: list1,
    layout2: list2,
    layout3: list3,
    layout4: list4,
  },
  table: {
    layout1: Table,
  },
  custom: {
    layout1: Image1,
  },
  layout: {
    layout1: Layout1,
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
  const loadedData: any = useLoaderData();
  const dispatch = useDispatch<AppDispatch>();
  // console.log('loadedData =', loadedData);

  useEffect(() => {
    dispatch(
      setInitialState({
        page: loadedData.pageData.page,
        pageInfo: loadedData.pageData.pageInfo,
      })
    );
  }, [dispatch]);

  const pageData = useSelector(
    (state: RootState) => state.editPage,
    shallowEqual
  );
  // console.log(pageData);
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  // if (isLoading && !pageData) {
  //   return <LoadingSpinner />;
  // }

  const handleEditAddBlockHere = (i: number) => {
    dispatch(putNewBlockTop({ index: i }));
  };

  const handleEditAddBlockBottom = (i: number) => {
    dispatch(putNewBlockBottom({ index: i }));
  };
  /** 230805 메모
   * 1. 블록 추가 버튼 클릭 시, 빈 블록값 생성
   * 2. 새로 생성된 블록에서 디자인 수정 클릭 시, 디자인 선택 모달 띄움
   * 3. 디자인 선택 모달에서 디자인 선택 시, 디자인 타입과 디자인 아이디를 블록에 저장
   * 4. 블록에 저장된 디자인 타입과 디자인 아이디를 통해 디자인 렌더링
   *
   * EditBlock을 누르면 new Block이 생기는데, 이때 newBlock은 initial한 상태
   * 그 상태에선 EditAddSelectDesign을 렌더링
   * EditAddSelectDesign에서 디자인 선택 시, EditBlock의 상태를 바꿔줘야 함
   *
   * 집갔다와서 해야지
   *
   */

  // new Block - design select - modal On

  return (
    <>
      {pageData && (
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
            <PageNavigation />
            {pageData.page.map((v: any, i: any) => {
              const Component =
                LAYOUT_COMPONENT[v.type][`layout${v.contentLayout}`];
              return (
                <div key={i}>
                  <EditBlock
                    onClickTop={() => handleEditAddBlockHere(i)}
                    onClickBottom={() => handleEditAddBlockBottom(i)}
                    index={i}
                    key={i}
                  >
                    <Component key={i} block_id={i} />
                  </EditBlock>
                </div>
              );
            })}
            <Footer />
          </GridContainer>
        </div>
      )}
    </>
  );
};
