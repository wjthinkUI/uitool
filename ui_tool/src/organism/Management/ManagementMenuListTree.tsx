import {
  ListChildrenMenu,
  ListParentsMenu,
} from '@molecule/List/ListMenuTwoTypes';
import { ListAddMenu } from '@molecule/List/ListAddMenu';
import type { ListInnerData, treeDataProps } from 'types';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';

// const treeData: treeDataProps[] = [
//   {
//     title: <ListParentsMenu title={'웅진부끄러'} key={'123'} />,
//     isParent: true,
//     key: '0-0',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 아기'} key={'123'} />,
//     isParent: false,
//     key: '0-0-0',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 도비'} key={'123'} />,
//     isParent: false,
//     key: '0-0-1',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 바비'} key={'123'} />,
//     isParent: false,
//     key: '0-0-2',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 켄'} key={'123'} />,
//     isParent: false,
//     key: '0-0-3',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 저기'} key={'0-0-4'}/>,
//     isParent: false,
//     key: '0-0-4',
//   },
//   {
//     title: <ListParentsMenu title={'웅진부끄러'} key={'123'} />,
//     isParent: true,
//     key: '0-1',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 아기'} key={'123'} />,
//     isParent: false,
//     key: '0-1-0',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 도비'} key={'123'} />,
//     isParent: false,
//     key: '0-1-1',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 바비'} key={'123'} />,
//     isParent: false,
//     key: '0-1-2',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 켄'} key={'123'} />,
//     isParent: false,
//     key: '0-1-3',
//   },
//   {
//     title: <ListChildrenMenu title={'웅진부끄러 저기'} key={'123'} />,
//     isParent: false,
//     key: '0-1-4',
//   },
// ];

export const ManageMenuListTree = () => {
  /**Server data 전역 상태로 가져오기 */
  // const data = useSelector((state: any) => state.modal);
  const resData:any = useLoaderData();
  const treeData = (resData.resData.data);

  return (
    <>
      <ListAddMenu />
      <div className="w-[1220px] h-auto p-8 rounded-[26px] bg-grayscale-50 border border-grayscale-200 border-dashed">
        <div className="flex flex-col items-end gap-2">
          {treeData.map(({ key, title, isParent, path, category, date }:ListInnerData) => (
            isParent ? (<ListParentsMenu key={key} title={title} path={path} category={category} date={date} isParent={isParent} />) : (<ListChildrenMenu key={key} title={title} path={path} category={category} date={date} isParent={isParent} />)
          ))}
        </div>
        
      </div>
    </>
  );
};
